import React, { useState } from "react";
import { FloatingLabel, Form, InputGroup, Button } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    dob: "",
    phone: "",
    hobby: [],
    gender: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [globalError, setGlobalError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "hobby") {
      const hobbies = checked
        ? [...formData.hobby, value]
        : formData.hobby.filter((h) => h !== value);
      setFormData((p) => ({ ...p, hobby: hobbies }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setGlobalError("");
    try {
      await register(formData);
      navigate("/home");
    } catch (err) {
      if (err.fieldErrors) {
        setFieldErrors(err.fieldErrors);
      } else {
        setGlobalError(err.message);
      }
    }
  };

  const {
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
  } = formData;

  return (
    <>
      <h1 className="display-4 text-primary mb-4">
        Welcome to the Sign-Up Page
      </h1>
      {globalError && <p className="text-danger">{globalError}</p>}

      <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div
          className="signUp-container"
          style={{
            padding: "10px 30px 30px",
            width: "500px",
            borderRadius: "30px",
            backdropFilter: "blur(3px)",
            backgroundColor: "#ffffff",
          }}
        >
          <span className="display-5 mb-5 text-primary">Sign-Up</span>

          <div className="d-flex justify-content-between mb-3 mt-2">
            <FloatingLabel controlId="firstName" label="First Name">
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                isInvalid={!!fieldErrors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors.firstName}
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="lastName" label="Last Name">
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                isInvalid={!!fieldErrors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors.lastName}
              </Form.Control.Feedback>
            </FloatingLabel>
          </div>

          <FloatingLabel controlId="userName" label="Username" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              name="userName"
              value={userName}
              onChange={handleChange}
              isInvalid={!!fieldErrors.userName}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.userName}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="email" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              isInvalid={!!fieldErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.email}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="dob" label="Date of Birth" className="mb-3">
            <Form.Control
              type="date"
              name="dob"
              value={dob}
              onChange={handleChange}
              isInvalid={!!fieldErrors.dob}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.dob}
            </Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel controlId="phone" label="Phone" className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              isInvalid={!!fieldErrors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.phone}
            </Form.Control.Feedback>
          </FloatingLabel>
          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3">
              <Form.Label>Select your hobbies:</Form.Label>
              {["Coding", "Reading", "Music"].map((h) => (
                <Form.Check
                  key={h}
                  type="checkbox"
                  label={h}
                  name="hobby"
                  value={h}
                  checked={hobby.includes(h)}
                  onChange={handleChange}
                />
              ))}
              {fieldErrors.hobby && (
                <Form.Text className="text-danger">
                  {fieldErrors.hobby}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select your gender:</Form.Label>
              {["Male", "Female"].map((g) => (
                <Form.Check
                  key={g}
                  type="radio"
                  label={g}
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={handleChange}
                />
              ))}
              {fieldErrors.gender && (
                <Form.Text className="text-danger">
                  {fieldErrors.gender}
                </Form.Text>
              )}
            </Form.Group>
          </div>

          <FloatingLabel controlId="address" label="Address" className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Address"
              style={{ height: "75px" }}
              name="address"
              value={address}
              onChange={handleChange}
              isInvalid={!!fieldErrors.address}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.address}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Form.Group className="mb-3">
            <Form.Label>Select your city:</Form.Label>
            <Form.Select
              name="city"
              value={city}
              onChange={handleChange}
              isInvalid={!!fieldErrors.city}
            >
              <option value="" disabled>
                -- Select City --
              </option>
              {[
                "Austin",
                "Bangalore",
                "Chennai",
                "Chicago",
                "Dallas",
                "Houston",
                "Los Angeles",
                "Mumbai",
                "New Delhi",
                "New York",
                "Philadelphia",
                "Phoenix",
                "San Antonio",
                "San Diego",
                "San Francisco",
                "San Jose",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {fieldErrors.city}
            </Form.Control.Feedback>
          </Form.Group>

          <InputGroup className="mb-3">
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
                isInvalid={!!fieldErrors.password}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => setShowPassword((p) => !p)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <FloatingLabel controlId="confirmPassword" label="Confirm Password">
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                isInvalid={!!fieldErrors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors.confirmPassword}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() => setShowConfirmPassword((p) => !p)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>

          <Button type="submit" className="w-100 rounded-5">
            Register
          </Button>

          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default SignUp;
