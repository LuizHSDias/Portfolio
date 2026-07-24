import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={11} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOBRE <span className="purple">MIM</span>
            </h1>

            <p className="home-about-body">
              Sou estudante de{" "}
              <b className="purple">Engenharia de Computação</b> no{" "}
              <b className="purple">CEFET-MG Campus Timóteo</b>, com interesse
              em desenvolvimento de software e foco na construção de soluções
              Back-end utilizando{" "}
              <b className="purple">Java e Spring Boot</b>.

              <br />
              <br />

              Ao longo da graduação participei de projetos de pesquisa, ensino,
              extensão e desenvolvimento de software, além de complementar minha
              formação por meio de cursos especializados e desafios técnicos.

              <br />
              <br />

              Tenho interesse em desenvolver aplicações escaláveis, aplicar boas
              práticas de desenvolvimento e evoluir continuamente como
              profissional.

              <br />
              <br />

              Conheça mais sobre minha trajetória, experiências, tecnologias e
              projetos na página{" "}
              <b className="purple">Sobre</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;