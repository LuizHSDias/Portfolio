import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import lacuna from "../../Assets/Projects/Lacuna.png";
import commerce from "../../Assets/Projects/Commerce.png";
import agenda from "../../Assets/Projects/agenda.png";
import PETIT from "../../Assets/Projects/PETIT.png";
import CRUD from "../../Assets/Projects/CRUD.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong>
        </h1>

        <p style={{ color: "white" }}>
          Projetos acadêmicos, desafios técnicos e aplicações desenvolvidas
          durante minha graduação para colocar em prática conhecimentos em
          desenvolvimento Back-end, Full Stack e APIs REST.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PETIT}
              isBlog={false}
              title="Sistema de Controle de Empréstimos"
              description="Sistema desenvolvido com Java, Spring Boot, Angular e MySQL para gerenciamento de empréstimos de livros. Possui autenticação, controle de usuários, registro de operações e organização dos processos internos."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agenda}
              isBlog={false}
              title="Agenda Médica (TimeSaver)"
              description="Aplicação desenvolvida em Python, Flask e Docker para gerenciamento de consultas médicas. Implementa APIs REST, integração com API simulada e containerização utilizando Docker Compose."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lacuna}
              isBlog={false}
              title="Sincronização de Relógios (Lacuna)"
              description="Desafio técnico desenvolvido em C# e .NET para sincronização temporal entre sondas utilizando cálculo de RTT, Clock Offset, múltiplos formatos de timestamp e tratamento de falhas de comunicação."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="DSCommerce"
              description="Projeto de e-commerce desenvolvido com Java e Spring Boot para estudo de APIs REST, modelagem de entidades, autenticação e boas práticas de desenvolvimento."
              ghLink="https://github.com/LuizHSDias/DSCommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="CRUD Node.js"
              description="Aplicação CRUD desenvolvida utilizando Node.js, Express, Sequelize e MySQL, permitindo cadastro, consulta, atualização e remoção de registros."
              ghLink="https://github.com/LuizHSDias/CRUD_Node"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfólio Pessoal"
              description="Portfólio responsivo desenvolvido em React e Bootstrap para apresentar minha trajetória, projetos, tecnologias e experiências em desenvolvimento de software."
              ghLink="https://github.com/LuizHSDias"
              demoLink="https://luizhsdias.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;