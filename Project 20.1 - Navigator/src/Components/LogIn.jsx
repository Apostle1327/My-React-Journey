import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FloatingLabel, Form, InputGroup, Button } from "react-bootstrap";

const LogIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const executeChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const executeSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    try {
      await login(formData.email, formData.password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1 className="display-3 text-primary mb-4">Welcome to the Login Page</h1>
      {error && <p className="text-danger">{error}</p>}

      <Form onSubmit={executeSubmit} className="d-flex justify-content-center">
        <div
          className="login-container"
          style={{
            padding: "10px 30px 30px",
            width: "500px",
            borderRadius: "30px",
            backdropFilter: "blur(3px)",
            backgroundColor: "#ffffff",
          }}
        >
          <span className="display-4 mb-5 text-primary">Login</span>

          <FloatingLabel controlId="email" label="Email" className="mb-3 mt-3">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={executeChange}
              isInvalid={!!fieldErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.email}
            </Form.Control.Feedback>
          </FloatingLabel>

          <InputGroup className="mb-3">
            <FloatingLabel controlId="password" label="Password">
              <Form.Control
                type={formData.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={executeChange}
                isInvalid={!!fieldErrors.password}
              />
              <Form.Control.Feedback type="invalid">
                {fieldErrors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <Button
              type="button"
              variant="outline-secondary"
              onClick={() =>
                setFormData((p) => ({
                  ...p,
                  showPassword: !p.showPassword,
                }))
              }
            >
              {formData.showPassword ? "Hide" : "Show"}
            </Button>
          </InputGroup>

          <Button type="submit" className="w-100 rounded-5">
            Login
          </Button>

          <p className="mt-3">
            Don't have an account? <Link to="/">Sign Up</Link>
          </p>
        </div>
      </Form>
    </>
  );
};

export default LogIn;
