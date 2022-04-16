import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


const styles = {
  name: {
    fontSize: '2rem'
  },
};

function navBarSeciton() {
  return (
    <Container className="my-3">
      <Navbar collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand style={styles.name} href="#home">Donald Cook</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#aboutMe">About Me</Nav.Link>
              <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://www.linkedin.com/in/donald-cook-4aa46813b/">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://github.com/dkcook90">GitHub</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="mailto:dkcook90@gmail.com">Email</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default navBarSeciton;
