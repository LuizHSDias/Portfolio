import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section">
        <Container>

          <Row className="justify-content-center">
            <Col
              lg={10}
              md={11}
              style={{
                paddingTop: "40px",
                paddingBottom: "60px",
              }}
            >
              <h1
                className="project-heading"
                style={{ textAlign: "center" }}
              >
                Sobre <strong className="purple">Mim</strong>
              </h1>

              <Aboutcard />
            </Col>
          </Row>

          <h1 className="project-heading">
            Principais <strong className="purple">Tecnologias</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Ferramentas que <strong className="purple">Utilizo</strong>
          </h1>

          <Toolstack />

          <Github />

        </Container>
      </Container>
    </>
  );
}

export default About;