import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const styles = {};

function navBarSeciton() {
  return (
    <Nav className="justify-content-center my-2" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#aboutMe">About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contactMe">Contact Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default navBarSeciton;
