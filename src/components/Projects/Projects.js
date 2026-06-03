import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong>
        </h1>

        <p style={{ color: "white" }}>
          Alguns dos projetos acadêmicos e profissionais que desenvolvi.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sistema de Controle de Empréstimos"
              description="Sistema desenvolvido utilizando Spring Boot, Angular e MySQL para gerenciamento interno de empréstimos. O projeto foi criado com foco em organização, controle e automação de processos."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Site Institucional"
              description="Desenvolvimento e manutenção de portal web utilizando HTML, CSS, JavaScript e outras tecnologias voltadas para publicação de conteúdo e divulgação de atividades acadêmicas."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Algoritmo de Gabow"
              description="Estudo, documentação e implementação do Algoritmo de Gabow para identificação de Componentes Fortemente Conectadas em grafos direcionados, incluindo análise teórica e aplicações práticas."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Algoritmo de Tarjan"
              description="Pesquisa e implementação do Algoritmo de Tarjan para identificação de Pontos de Articulação em grafos, com foco em aplicações em redes de computadores, sistemas distribuídos e bancos de dados."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Projetos Java"
              description="Desenvolvimento de aplicações utilizando Java com foco em Programação Orientada a Objetos, estruturas de dados, algoritmos e desenvolvimento de sistemas."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Projetos Web"
              description="Projetos acadêmicos e pessoais utilizando Angular, Spring Boot, HTML, CSS, JavaScript e APIs REST para construção de aplicações modernas e escaláveis."
              ghLink="https://github.com/LuizHSDias"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;