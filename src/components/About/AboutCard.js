import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá! Eu sou <span className="purple">Luiz Henrique</span>,
            estudante de
            <span className="purple"> Engenharia de Computação</span>
            no CEFET-MG Campus Timóteo.

            <br />
            <br />

            Tenho experiência no desenvolvimento de aplicações web utilizando
            <span className="purple">
              {" "}
              Java, Spring Boot, Angular, TypeScript,
              JavaScript, HTML, CSS e MySQL
            </span>.

            <br />
            <br />

            Meu principal interesse está nas áreas de
            <span className="purple">
              {" "}
              Desenvolvimento Back-end,
              Desenvolvimento Full Stack,
              APIs REST e Engenharia de Software.
            </span>
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento Web
            </li>

            <li className="about-activity">
              <ImPointRight /> Desenvolvimento Back-end
            </li>

            <li className="about-activity">
              <ImPointRight /> APIs REST com Spring Boot
            </li>

            <li className="about-activity">
              <ImPointRight /> Estruturas de Dados e Algoritmos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transformando ideias em soluções através da tecnologia."
          </p>

          <footer className="blockquote-footer">
            Luiz Henrique
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;