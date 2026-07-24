import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import homeLogo from "../../Assets/home-main.svg";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header">
              <h1 className="heading">
                Olá!{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                EU SOU
                <strong className="main-name"> LUIZ HENRIQUE </strong>
              </h1>

              <div
                style={{
                  paddingTop: "30px",
                  paddingBottom: "35px",
                }}
              >
                <Type />
              </div>

              <p
                style={{
                  maxWidth: "700px",
                  fontSize: "1.15rem",
                  lineHeight: "1.9",
                  color: "#d1d5db",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                Sou estudante de{" "}
                <strong>Engenharia de Computação</strong> no CEFET-MG, com foco
                em desenvolvimento <strong>Back-end</strong> utilizando{" "}
                <strong>Java, Spring Boot e APIs REST</strong>. Também possuo
                experiência com Angular, React, TypeScript, Python e bancos de
                dados SQL.

                <br />
                <br />

                Atualmente busco oportunidades para desenvolver soluções de
                qualidade, aprender continuamente e contribuir em projetos
                desafiadores.
              </p>
            </Col>

            <Col
              lg={5}
              md={12}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={homeLogo}
                alt="Desenvolvedor"
                className="img-fluid"
                style={{
                  maxWidth: "90%",
                  maxHeight: "450px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container fluid className="home-contact-section">
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contato</h1>

            <p>
              Estou disponível para{" "}
              <span className="purple">
                novas oportunidades e conexões profissionais
              </span>
              .
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LuizHSDias"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dev-luizh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;