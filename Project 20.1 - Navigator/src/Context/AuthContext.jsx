import { createContext, useContext, useState } from "react";

const hashPassword = async (
  password,
  salt = crypto.getRandomValues(new Uint8Array(16))
) => {
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password);
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    passwordData,
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"]
  );

  const derivedKey = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  return {
    salt: Array.from(salt),
    hash: Array.from(new Uint8Array(derivedKey)),
  };
};

const verifyPassword = async (password, saltArray, storedHashArray) => {
  const salt = new Uint8Array(saltArray);
  const storedHash = new Uint8Array(storedHashArray);

  const { hash } = await hashPassword(password, salt);
  return storedHash.every((byte, i) => byte === hash[i]);
};

// Context and Provider
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const register = async (email, password) => {
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      throw new Error("Invalid email format");
    }

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters");
    }

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      throw new Error("User already exists");
    }

    const { hash, salt } = await hashPassword(password);
    const newUser = {
      id: Date.now(),
      email,
      passwordHash: hash,
      salt,
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const userWithoutPassword = { id: newUser.id, email: newUser.email };
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
  };

  const login = async (email, password) => {
    const user = users.find((u) => u.email === email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await verifyPassword(
      password,
      user.salt,
      user.passwordHash
    );
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const userWithoutPassword = { id: user.id, email: user.email };
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
