import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOBRE <span className="purple"> MIM </span>
            </h1>

            <p className="home-about-body">
              Olá! Meu nome é <b className="purple">Luiz Henrique</b> e sou
              estudante de Engenharia de Computação no
              <b className="purple"> CEFET-MG Campus Timóteo</b>.

              <br />
              <br />

              Tenho experiência no desenvolvimento de aplicações web,
              utilizando tecnologias modernas para construção de sistemas,
              APIs REST e integração entre front-end e back-end.

              <br />
              <br />

              Atualmente possuo conhecimentos em

              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Angular, TypeScript, JavaScript,
                  HTML, CSS, SQL e MySQL.
                </b>
              </i>

              <br />
              <br />

              Tenho grande interesse pelas áreas de

              <i>
                <b className="purple">
                  {" "}
                  Desenvolvimento Back-end,
                  Desenvolvimento Full Stack,
                  Engenharia de Software,
                  APIs REST e Arquitetura de Sistemas.
                </b>
              </i>

              <br />
              <br />

              Sou apaixonado por tecnologia e desenvolvimento de software,
              buscando constantemente aprimorar minhas habilidades por meio
              de projetos acadêmicos, pessoais e experiências práticas.

              <br />
              <br />

              Atualmente estou em busca de oportunidades de estágio para
              aplicar meus conhecimentos, adquirir experiência profissional
              e contribuir para o desenvolvimento de soluções inovadoras.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;