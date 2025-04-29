import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Missing = () => {
  return (
    <>
      <h1 className="display-3 text-danger">404</h1>

      <p>Page Not Found</p>
      <p>You Lost Homie ?</p>

      <Button as={Link} to="/">
        Go Back Home
      </Button>
    </>
  );
};

export default Missing;
