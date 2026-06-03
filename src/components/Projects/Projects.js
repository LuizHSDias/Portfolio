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
      description="Sistema desenvolvido com Spring Boot, Angular e MySQL para gerenciamento de empréstimos. Possui controle de usuários, registro de operações e organização de processos internos."
      ghLink="https://github.com/LuizHSDias"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={editor}
      isBlog={false}
      title="CRUD Node.js"
      description="Aplicação CRUD desenvolvida com Node.js e JavaScript para gerenciamento de dados utilizando operações de cadastro, consulta, atualização e remoção."
      ghLink="https://github.com/LuizHSDias/CRUD_Node"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={leaf}
      isBlog={false}
      title="DSCommerce"
      description="Projeto de e-commerce desenvolvido para estudo de desenvolvimento web, modelagem de entidades, integração de dados e boas práticas de programação."
      ghLink="https://github.com/LuizHSDias/DSCommerce"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={emotion}
      isBlog={false}
      title="Calculadora IMC"
      description="Aplicação web desenvolvida com HTML, CSS e JavaScript para cálculo do Índice de Massa Corporal, apresentando classificação automática dos resultados."
      ghLink="https://github.com/LuizHSDias/calculadora-imc"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={suicide}
      isBlog={false}
      title="Programação Linear em Python"
      description="Implementação de conceitos de programação linear utilizando Python, aplicando técnicas matemáticas para resolução de problemas de otimização."
      ghLink="https://github.com/LuizHSDias/Programacao-Linear-Python"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={bitsOfCode}
      isBlog={false}
      title="Alerta de Compra"
      description="Projeto em JavaScript para monitoramento e automação de alertas relacionados a produtos e oportunidades de compra."
      ghLink="https://github.com/LuizHSDias/alerta_compra"
    />
  </Col>

</Row>
      </Container>
    </Container>
  );
}

export default Projects;