import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "40px",
        color: "white",
      }}
    >
      <h1
        className="project-heading"
        style={{
          paddingBottom: "30px",
          textAlign: "center",
        }}
      >
        Minha atividade no <strong className="purple">GitHub</strong>
      </h1>

      <GitHubCalendar
        username="LuizHSDias"
        blockSize={18}
        blockMargin={6}
        color="#3B82F6"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;