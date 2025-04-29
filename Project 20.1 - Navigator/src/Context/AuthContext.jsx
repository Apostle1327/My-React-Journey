import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const PHONE_REGEX = /^(?=(?:.*\d){10}$)\+?[0-9\s\-()]+$/;

function validateSignUpData({
  firstName,
  lastName,
  userName,
  email,
  dob,
  phone,
  hobby,
  gender,
  address,
  city,
  password,
  confirmPassword,
}) {
  const errors = {};

  if (!firstName?.trim()) errors.firstName = "First name is required";
  if (!lastName?.trim()) errors.lastName = "Last name is required";
  if (!userName?.trim()) errors.userName = "Username is required";

  if (!email?.trim()) errors.email = "Email is required";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Email format is invalid";

  if (!dob) errors.dob = "Date of birth is required";

  if (!phone?.trim()) errors.phone = "Phone is required";
  else if (!PHONE_REGEX.test(phone))
    errors.phone = "Enter a valid 10‐digit phone number";

  if (!Array.isArray(hobby) || hobby.length === 0)
    errors.hobby = "Select at least one hobby";

  if (!gender) errors.gender = "Gender is required";
  if (!address?.trim()) errors.address = "Address is required";
  if (!city?.trim()) errors.city = "City is required";

  if (!password) errors.password = "Password is required";
  else if (!PASSWORD_REGEX.test(password))
    errors.password =
      "Password must have at least 8 characters, including upper, lower, digit, and special character";

  if (!confirmPassword) errors.confirmPassword = "Confirm your password";
  else if (password !== confirmPassword)
    errors.confirmPassword = "Passwords must match";

  return errors;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // load persisted user on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("currentUser"));
    if (saved) setUser(saved);
  }, []);

  const register = async (signUpData) => {
    const errors = validateSignUpData(signUpData);
    if (Object.keys(errors).length > 0) {
      const e = new Error("Validation failed");
      e.fieldErrors = errors;
      throw e;
    }

    const { email, password, userName, ...rest } = signUpData;
    const normalizedEmail = email.trim().toLowerCase();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === normalizedEmail)) {
      throw new Error("User already exists");
    }
    if (
      users.some(
        (u) => u.userName.toLowerCase() === userName.trim().toLowerCase()
      )
    ) {
      throw new Error("Username already taken");
    }

    const newUser = {
      email: normalizedEmail,
      password,
      userName: userName.trim(),
      ...rest,
    };
    const updatedList = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedList));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = async (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = users.find(
      (u) => u.email === normalizedEmail && u.password === password
    );
    if (!existingUser) {
      throw new Error("Invalid credentials");
    }
    setUser(existingUser);
    localStorage.setItem("currentUser", JSON.stringify(existingUser));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
