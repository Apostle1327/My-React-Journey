import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const executeLogOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <h1 className="display-3 text-primary mb-4">Welcome to the Home Page!</h1>

      <Button onClick={executeLogOut}>Logout</Button>
    </>
  );
};

export default HomePage;
