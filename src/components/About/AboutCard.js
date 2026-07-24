import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Sou estudante de{" "}
            <b className="purple">Engenharia de Computação</b> no{" "}
            <b className="purple">CEFET-MG Campus Timóteo</b>, apaixonado por
            tecnologia e desenvolvimento de software.

            <br />
            <br />

            Ao longo da graduação participei de projetos de{" "}
            <b className="purple">pesquisa, ensino e extensão</b>, além do
            desenvolvimento de aplicações web e APIs REST utilizando{" "}
            <b className="purple">
              Java, Spring Boot, Angular, React, Python e SQL
            </b>
            .

            <br />
            <br />

            Também busco evoluir continuamente por meio de{" "}
            <b className="purple">cursos especializados</b> e{" "}
            <b className="purple">desafios técnicos</b>, colocando em prática
            novos conhecimentos e acompanhando as boas práticas do mercado de
            desenvolvimento de software.

            <br />
            <br />

            Tenho interesse em construir soluções escaláveis, escrever código
            limpo e colaborar no desenvolvimento de sistemas que gerem valor
            para pessoas e empresas.

            <br />
            <br />

            Atualmente busco oportunidades de estágio ou nível júnior para
            contribuir em projetos desafiadores, aprender com profissionais
            experientes e continuar evoluindo como desenvolvedor.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento Back-end
            </li>

            <li className="about-activity">
              <ImPointRight /> Desenvolvimento Full Stack
            </li>

            <li className="about-activity">
              <ImPointRight /> APIs REST
            </li>

            <li className="about-activity">
              <ImPointRight /> Arquitetura de Software
            </li>

            <li className="about-activity">
              <ImPointRight /> Aprendizado Contínuo
            </li>

            <li className="about-activity">
              <ImPointRight /> Trabalho em Equipe
            </li>
          </ul>

          <p
            style={{
              color: "#60A5FA",
              fontStyle: "italic",
              textAlign: "center",
              marginTop: "25px",
            }}
          >
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