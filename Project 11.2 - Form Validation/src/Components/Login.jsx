// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Login = ({ onSubmit, credentials }) => {
  const [formData, setFormData] = useState({ eMail: "", passWord: "" });

  const handleModifications = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const executeSubmit = (e) => {
    e.preventDefault();

    if (!formData.eMail && !formData.passWord) {
      alert("Please enter appropriate credentials");
      return;
    }

    if (credentials) {
      if (
        credentials.eMail === formData.eMail &&
        credentials.passWord === formData.passWord
      ) {
        onSubmit(credentials);
      } else {
        alert("Invalid Credentials!");
      }
      return;
    }

    const existingUser = localStorage.getItem("user");
    if (!existingUser) {
      alert("No users found, please sign-up first!");
      return;
    }

    const userData = JSON.parse(existingUser);
    if (
      userData.eMail === formData.eMail &&
      userData.passWord === formData.passWord
    ) {
      onSubmit(userData);
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
      <h1 className="display-3 text-primary">Welcome to the Login Page</h1>
      <form
        action=""
        method="post"
        className="d-flex justify-content-center align-items-center"
        onSubmit={executeSubmit}
      >
        <div
          className="login-container"
          style={{
            padding: "10px 30px 30px 30px",
            border: "1px solid white",
            width: "500px",
            position: "absolute",
            top: "235px",
            borderRadius: "30px",
            backdropFilter: "blur(3px)",
            backgroundColor: "#ffffff",
          }}
        >
          <span className="display-4 mb-5 text-primary">Login</span>

          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="eMail"
              placeholder="name@example.com"
              value={formData.eMail}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="floatingInput"
              style={{ background: "transparent", color: "black" }}
            >
              Email address
            </label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="passWord"
              placeholder="Password"
              value={formData.passWord}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="floatingPassword"
              style={{ background: "transparent", color: "black" }}
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-4 rounded-5 w-75 p-2"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
