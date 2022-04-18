import React from "react";
import pokemonImg from "../assets/newpokemon.png";
import storageCRM from "../assets/storageCRM.png";
import weatherDash from "../assets/WeatherDashboard.png";
import { Container, CardGroup, Card, Button } from "react-bootstrap";

const styles = {};

function Project() {
  return (
    <Container id="projects">
      <CardGroup>
        <Card className="mx-2">
          <Card.Img variant="top" src={pokemonImg} />
          <Card.Body>
            <Card.Title>Pokemon Look-Up</Card.Title>
            <Card.Text>
              This app allows the user to search for a Pokemon card within a
              specified expansion. The returned data includes card type and
              current market trends for the card.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="justify-content-center">
            <Button className="mx-auto" href="https://eeoerkeedu.github.io/Pokemon_TCG_Finder/" target="_blank">Check it Out</Button>
          </Card.Footer>
        </Card>
        <Card className="mx-2">
          <Card.Img variant="top" src={storageCRM} />
          <Card.Body>
            <Card.Title>Mock CRM for a storage company</Card.Title>
            <Card.Text>
              This CRM was built with a storage company in mind, which allow the
              employee to login and view customer information as well as storage
              unit information.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className="mx-auto" href="https://obscure-fortress-36199.herokuapp.com/" target="_blank">Check it Out</Button>
          </Card.Footer>
        </Card>
        <Card className="mx-2">
          <Card.Img variant="top" src={weatherDash} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              This app allows the user to search for any city in the United
              States and get up-to-date info on the current weather for that
              city. The app also saves previously searched cities.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className="mx-auto" href="https://dkcook90.github.io/DU-HW6-WeatherApp/" target="_blank">Check it Out</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default Project;
