import React from "react";
import { Container, Image, ListGroup, rounded, Row } from "react-bootstrap";
import selfie from "../assets/selfie.jpg";

const styles = {};

function Header() {
  return (
    <Container className="p-3">
      <Container className="p-3 mb-1 bg-light rounded-3 text-center">
        <h1 className="header">Donald Cook</h1>
      </Container>
      <Container id="aboutMe">
        <Row className="mb-3 justify-content-center">
          <Image className="rounded-circle col-6 w-25 mx-auto my-auto" src={selfie}></Image>
          <p className="col-6 mx-auto my-auto">
            Greetings! My name is Donald and welcome to my portfolio built with
            React! I am curentyl studying fullstack web development at the
            University of Denver. Here I have learned all components of
            fullstack web development as well as working with a team to develop
            fullstack projects.
          </p>
          <ListGroup className="text-center w-25 mx-auto my-auto">
            <ListGroup.Item>MERN stack</ListGroup.Item>
            <ListGroup.Item>RESTful API's</ListGroup.Item>
            <ListGroup.Item>CRUD opperations</ListGroup.Item>
            <ListGroup.Item>SQL and NoSQL databases</ListGroup.Item>
            <ListGroup.Item>HTML, CSS, and Javascript languages</ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
      <Container></Container>
    </Container>
  );
}

export default Header;
