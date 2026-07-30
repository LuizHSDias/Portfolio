import React from "react";
import { Col, Row } from "react-bootstrap";

import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import visualStudio from "../../Assets/TechIcons/Visual Studio.svg";
import docker from "../../Assets/TechIcons/Docker.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import GitHub from "../../Assets/TechIcons/Github.svg";
import MySQL from "../../Assets/TechIcons/MySQL Workbench.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={intelliJ} alt="IntelliJ IDEA" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={visualStudio} alt="Visual Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={MySQL} alt="MySQL Workbench" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL Workbench</div>
      </Col>

    </Row>
  );
}

export default Toolstack;