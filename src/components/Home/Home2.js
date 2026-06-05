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

              Tenho interesse em tecnologia e desenvolvimento de software,
              buscando constantemente aplicar na prática os conhecimentos
              adquiridos durante a graduação por meio de projetos acadêmicos e
              pessoais.

              <br />
              <br />

              Possuo experiência com

              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Angular, TypeScript, JavaScript,
                  HTML, CSS, SQL e MySQL.
                </b>
              </i>

              <br />
              <br />

              Ao longo da minha formação, venho desenvolvendo aplicações web,
              APIs REST e sistemas voltados para resolver problemas reais,
              sempre buscando aprimorar minhas habilidades técnicas e aprender
              novas tecnologias.

              <br />
              <br />

              Atualmente estou em busca de oportunidades de estágio para
              adquirir experiência profissional, contribuir em projetos
              desafiadores e continuar evoluindo como desenvolvedor.
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