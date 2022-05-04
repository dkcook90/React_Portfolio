import React from "react";
import { Container, Image, ListGroup, rounded, Row } from "react-bootstrap";
import selfie from "../assets/selfie.jpg";

const styles = {};

function Header() {
  return (
    <Container className="p-3">
      <Container id="aboutMe">
        <Row className="mb-3 justify-content-center">
          <Image className="rounded-circle col w-25 mx-auto my-auto" src={selfie}></Image>
          <p className="col mx-auto my-auto">
            Greetings! My name is Donald and welcome to my portfolio built with
            React! I am curentyl studying fullstack web development at the
            University of Denver. Here I have learned all components of
            fullstack web development as well as working with a team to develop
            fullstack projects.
          </p>
          <ListGroup className="text-center w-25 mx-auto my-auto col">
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
