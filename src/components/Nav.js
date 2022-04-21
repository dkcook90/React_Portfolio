import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const styles = {};

function navBarSeciton() {
  return (
    <>
    <Container className="p-3 mb-1 bg-light rounded-3 text-center">
        <h1 className="header">Donald Cook</h1>
    </Container>
    <Nav className="justify-content-center my-2" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/form">Contact Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
}

export default navBarSeciton;
