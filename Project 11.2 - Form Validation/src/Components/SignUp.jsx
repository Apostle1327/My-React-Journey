// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SignUp = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    dOB: "",
    passWord: "",
    confirmPassWord: "",
  });

  const handleModifications = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const executeSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName &&
      !formData.lastName &&
      !formData.eMail &&
      !formData.dOB &&
      !formData.passWord &&
      !formData.confirmPassWord
    ) {
      alert("Please Enter the Credentials Properly!");
      return;
    }

    if (formData.passWord !== formData.confirmPassWord) {
      alert("Passwords do not match!");
      return;
    }

    onSubmit(formData);
    localStorage.setItem("user", JSON.stringify(formData));
  };

  return (
    <>
      <h1 className="display-3 text-primary">Welcome to the Sign-Up Page</h1>
      <form
        onSubmit={executeSubmit}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="signUp-container"
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
          <span className="display-4 mb-5 text-primary">Sign-Up</span>

          <div id="name" className="d-flex justify-content-between">
            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                placeholder="Enter Your First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleModifications}
                style={{
                  background: "transparent",
                  border: "2px solid #c3c3c3",
                  width: "210px",
                }}
                required
              />

              <label
                htmlFor="firstNameInput"
                style={{ background: "transparent", color: "black" }}
              >
                First Name
              </label>
            </div>

            <div className="form-floating mt-3">
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                placeholder="Enter Your Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleModifications}
                style={{
                  background: "transparent",
                  border: "2px solid #c3c3c3",
                  width: "210px",
                }}
                required
              />

              <label
                htmlFor="lastNameInput"
                style={{ background: "transparent", color: "black" }}
              >
                Last Name
              </label>
            </div>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              name="eMail"
              id="eMailInput"
              className="form-control"
              placeholder="Enter Your eMail"
              value={formData.eMail}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="eMailInput"
              style={{ background: "transparent", color: "black" }}
            >
              eMail
            </label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input
              type="date"
              name="dOB"
              id="dOBInput"
              className="form-control"
              placeholder="Select your Birth-Date"
              value={formData.dOB}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="dOBInput"
              style={{ background: "transparent", color: "black" }}
            >
              Date of Birth
            </label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input
              type="password"
              name="passWord"
              id="passWordInput"
              className="form-control"
              placeholder="Enter Your Password!"
              value={formData.passWord}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="passWordInput"
              style={{ background: "transparent", color: "black" }}
            >
              Password
            </label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input
              type="password"
              name="confirmPassWord"
              id="passWordCheck"
              className="form-control"
              placeholder="Confirm Your Password!"
              value={formData.confirmPassWord}
              onChange={handleModifications}
              style={{ background: "transparent", border: "2px solid #c3c3c3" }}
              required
            />

            <label
              htmlFor="passWordCheck"
              style={{ background: "transparent", color: "black" }}
            >
              Confirm Password
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              required
            />

            <label
              className="form-check-label d-flex flex-start"
              htmlFor="flexCheckDefault"
            >
              I accept the
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  margin: "0px 5px",
                }}
              >
                Terms of Use
              </a>
              &amp;
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  margin: "0px 5px",
                }}
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 w-75 rounded-5 p-2"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
