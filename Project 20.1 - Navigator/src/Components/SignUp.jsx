import { React, useState } from "react";
import { FloatingLabel, Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const executeSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) return;

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }

    try {
      await register(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const validation = () => {
    let tempError = {};
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!userName) tempError.username = "Username is required";
    if (!email) tempError.email = "Email is required";
    if (!password) tempError.password = "Password is required";
    if (password && !pattern.test(password)) {
      tempError.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number & special character.";
    }
    if (!phone) tempError.phone = "Phone is required";
    if (!hobby || hobby.length === 0)
      tempError.hobby = "Select at least one hobby";
    if (!gender) tempError.gender = "Gender is required";
    if (!address) tempError.address = "Address is required";
    if (!city) tempError.city = "City is required";

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  return (
    <>
      <h1 className="display-4 text-primary mb-4">
        Welcome to the Sign-Up Page
      </h1>

      {error && <p>{error}</p>}

      <form
        onSubmit={executeSubmit}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          className="signUp-container"
          style={{
            padding: "10px 30px 30px 30px",
            width: "500px",
            borderRadius: "30px",
            backdropFilter: "blur(3px)",
            backgroundColor: "#ffffff",
          }}
        >
          <span className="display-5 mb-5 text-primary">Sign-Up</span>

          <div id="name" className="d-flex justify-content-between">
            <div className="mt-3" style={{ width: "210px" }}>
              <FloatingLabel controlId="firstName" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Your First Name!"
                  name="firstName"
                  value={firstName || ""}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </FloatingLabel>
            </div>

            <div className="mt-3" style={{ width: "210px" }}>
              <FloatingLabel controlId="lastName" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Last Name!"
                  name="lastName"
                  value={lastName || ""}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="userName" label="Username">
              <Form.Control
                type="text"
                placeholder="Enter Your Username!"
                name="username"
                value={userName || ""}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </FloatingLabel>
            {error.username && (
              <div className="text-danger">{error.username}</div>
            )}
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="eMail" label="Email">
              <Form.Control
                type="email"
                placeholder="Enter Your Email!"
                name="email"
                value={email || ""}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FloatingLabel>
            {error.email && <div className="text-danger">{error.email}</div>}
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="dob" label="Date of Birth">
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={dob || ""}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </FloatingLabel>
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="phone" label="Phone">
              <Form.Control
                type="number"
                placeholder="Enter Your Phone No."
                name="phone"
                value={phone || ""}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </FloatingLabel>
            {error.phone && <div className="text-danger">{error.phone}</div>}
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
