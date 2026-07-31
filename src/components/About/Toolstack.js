import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiIntellijidea,
  SiVisualstudiocode,
  SiDocker,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiIntellijidea size={45} color="#000000" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiVisualstudiocode size={45} color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiDocker size={45} color="#2496ED" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiGit size={45} color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiGithub size={45} />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiPostman size={45} color="#FF6C37" />
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
}

export default Toolstack;