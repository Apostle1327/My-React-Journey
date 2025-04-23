// eslint-disable-next-line
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function ProductNav() {
  return (
    <>
      <h1 className="heading-1">We Sell Random Shit</h1>
      <Container className="d-flex justify-content-center">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
          <Navbar.Brand href="#">My Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}

export default ProductNav;
