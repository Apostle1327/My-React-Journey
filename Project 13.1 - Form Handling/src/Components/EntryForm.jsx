import React, { useState, useEffect } from "react";
import { FloatingLabel, Form, InputGroup, Button } from "react-bootstrap";
import ViewData from "./ViewData";

const EntryForm = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [error, setError] = useState({});
  const [editId, setEditId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const oldList = JSON.parse(localStorage.getItem("list")) || [];
    setList(oldList);
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name === "hobby") {
      let newHobby = [...hobby];
      if (checked) {
        newHobby.push(value);
      } else {
        newHobby = newHobby.filter((val) => val !== value);
      }
      setHobby(newHobby);
      setUser({ ...user, hobby: newHobby });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const validation = () => {
    let tempError = {};
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!user.username) tempError.username = "Username is required";
    if (!user.email) tempError.email = "Email is required";
    if (!user.password) tempError.password = "Password is required";
    if (user.password && !pattern.test(user.password)) {
      tempError.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number & special character.";
    }
    if (!user.phone) tempError.phone = "Phone is required";
    if (!user.hobby || user.hobby.length === 0)
      tempError.hobby = "Select at least one hobby";
    if (!user.gender) tempError.gender = "Gender is required";
    if (!user.address) tempError.address = "Address is required";
    if (!user.city) tempError.city = "City is required";

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

  const executeSubmit = (e) => {
    e.preventDefault();
    if (!validation()) return;

    const updatedUser = { ...user, hobby };
    let newList = [];

    if (editId === null) {
      newList = [...list, { ...updatedUser, id: Date.now() }];
    } else {
      newList = list.map((item) =>
        item.id === editId ? { ...updatedUser, id: editId } : item
      );
      setEditId(null);
    }

    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);
    setUser({});
    setHobby([]);
    setError({});
    setShowPassword(false);
  };

  const executeDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    alert("User data deleted.");
    localStorage.setItem("list", JSON.stringify(newList));
    setList(newList);
  };

  const executeEdit = (id) => {
    const existing = list.find((item) => item.id === id);
    if (existing) {
      setUser(existing);
      setHobby(existing.hobby || []);
      setEditId(id);
    }
  };

  return (
    <>
      <h1 className="display-4 text-primary mb-4">
        Welcome to the Sign-Up Page
      </h1>
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
                  value={user.firstName || ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
            </div>
            <div className="mt-3" style={{ width: "210px" }}>
              <FloatingLabel controlId="lastName" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Last Name!"
                  name="lastName"
                  value={user.lastName || ""}
                  onChange={handleChange}
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
                value={user.username || ""}
                onChange={handleChange}
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
                value={user.email || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
            {error.email && <div className="text-danger">{error.email}</div>}
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="dob" label="Date of Birth">
              <Form.Control
                type="date"
                name="dateOfBirth"
                value={user.dateOfBirth || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="phone" label="Phone">
              <Form.Control
                type="number"
                placeholder="Enter Your Phone No."
                name="phone"
                value={user.phone || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
            {error.phone && <div className="text-danger">{error.phone}</div>}
          </div>

          <div id="checkBox" className="d-flex justify-content-between">
            <div className="mb-3">
              <Form.Group>
                <Form.Label className="mb-2">Select your hobbies:</Form.Label>
                {["Coding", "Reading", "Music"].map((h, idx) => (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    id={`hobby${h}`}
                    label={h}
                    name="hobby"
                    value={h}
                    checked={hobby.includes(h)}
                    onChange={handleChange}
                    className="text-start"
                  />
                ))}
                {error.hobby && (
                  <div className="text-danger">{error.hobby}</div>
                )}
              </Form.Group>
            </div>

            <div className="mb-3 mt-3">
              <Form.Group>
                <Form.Label className="mb-2">Select your Gender:</Form.Label>
                {["Male", "Female"].map((g, idx) => (
                  <Form.Check
                    key={idx}
                    type="radio"
                    id={`gender${g}`}
                    label={g}
                    name="gender"
                    value={g}
                    checked={user.gender === g}
                    onChange={handleChange}
                    className="text-start"
                  />
                ))}
                {error.gender && (
                  <div className="text-danger">{error.gender}</div>
                )}
              </Form.Group>
            </div>
          </div>

          <div className="mb-3 mt-3">
            <FloatingLabel controlId="address" label="Address">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "75px" }}
                name="address"
                value={user.address || ""}
                onChange={handleChange}
              />
            </FloatingLabel>
            {error.address && (
              <div className="text-danger">{error.address}</div>
            )}
          </div>

          <div className="mb-3 mt-3">
            <Form.Group>
              <Form.Label className="mb-2 text-start">
                Select your City:
              </Form.Label>
              <Form.Select
                aria-label="selectCity"
                name="city"
                value={user.city || ""}
                onChange={handleChange}
              >
                <option value="" disabled>
                  --Select City--
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
                ].map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
              {error.city && <div className="text-danger">{error.city}</div>}
            </Form.Group>
          </div>

          <div className="mb-3 mt-3">
            <InputGroup>
              <FloatingLabel controlId="passWord" label="Password">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  value={user.password || ""}
                  onChange={handleChange}
                />
              </FloatingLabel>
              <Button onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputGroup>
            {error.password && (
              <div className="text-danger">{error.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 w-75 rounded-5 p-2"
          >
            {editId ? "Update" : "Register"}
          </button>
        </div>
      </form>

      <ViewData
        list={list}
        handleDelete={executeDelete}
        handleEdit={executeEdit}
      />
    </>
  );
};

export default EntryForm;
