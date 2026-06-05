import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Sou estudante de Engenharia de Computação no CEFET-MG Campus
            Timóteo e tenho grande interesse por tecnologia, desenvolvimento
            de software e resolução de problemas.

            <br />
            <br />

            Gosto de transformar ideias em soluções práticas através da
            programação, participando de projetos acadêmicos e pessoais que me
            permitem aplicar conhecimentos e aprender novas tecnologias.

            <br />
            <br />

            Atualmente busco oportunidades para desenvolver minhas habilidades
            profissionais, contribuir em projetos reais e continuar evoluindo
            como desenvolvedor.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento de Software
            </li>

            <li className="about-activity">
              <ImPointRight /> Aprendizado contínuo
            </li>

            <li className="about-activity">
              <ImPointRight /> Resolução de problemas
            </li>

            <li className="about-activity">
              <ImPointRight /> Projetos acadêmicos e pessoais
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