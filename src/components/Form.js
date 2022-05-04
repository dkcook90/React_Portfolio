import React from "react";
import { Form, Button, Container, FormText } from "react-bootstrap";

const styles = {};

function formSection() {
  return (
    <Container id="contactMe" className="my-5">
      <Container className="p-3 mb-1 bg-light rounded-3 text-center">
        <h1 className="header">Let's connect!</h1>
      </Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="input" placeholder="First and Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTextarea">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default formSection;
