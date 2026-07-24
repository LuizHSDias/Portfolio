import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.title}
        className="project-card-img"
      />

      <Card.Body>
        <Card.Title className="project-title">
          {props.title}
        </Card.Title>

        <Card.Text
          className="project-description"
          style={{ textAlign: "justify" }}
        >
          {props.description}
        </Card.Text>

        <div className="project-buttons">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;