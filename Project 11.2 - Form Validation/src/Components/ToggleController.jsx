// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const ToggleController = () => {
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const manageFormExecution = (formData) => {
    setUserData(formData);
  };

  const logout = () => {
    setUserData(null);
  };

  return (
    <>
      {userData ? (
        <div>
          <h1 className="display-1 text-primary">
            Welcome {userData.firstName}
          </h1>

          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      ) : login ? (
        <Login onSubmit={manageFormExecution} />
      ) : (
        <SignUp onSubmit={manageFormExecution} />
      )}
      {!userData && (
        <button
          className="btn btn-primary p-2 w-25 rounded-5 mt-4"
          onClick={() => setLogin(!login)}
        >
          Switch to {login ? "Signup" : "Login"}
        </button>
      )}
    </>
  );
};

export default ToggleController;
