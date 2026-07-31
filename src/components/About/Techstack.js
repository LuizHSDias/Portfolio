import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiSpringboot,
  SiAngular,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <FaJava size={45} color="#f89820" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiSpringboot size={45} color="#6DB33F" />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <TbBrandCSharp size={45} color="#68217A" />
        <div className="tech-icons-text">C#</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiDotnet size={45} color="#512BD4" />
        <div className="tech-icons-text">.NET</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiPython size={45} color="#3776AB" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiAngular size={45} color="#DD0031" />
        <div className="tech-icons-text">Angular</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiReact size={45} color="#61DAFB" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiTypescript size={45} color="#3178C6" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiJavascript size={45} color="#F7DF1E" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiHtml5 size={45} color="#E34F26" />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiCss3 size={45} color="#1572B6" />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiPandas size={45} color="#150458" />
        <div className="tech-icons-text">Pandas</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiNumpy size={45} color="#013243" />
        <div className="tech-icons-text">NumPy</div>
      </Col>

    </Row>
  );
}

export default Techstack;