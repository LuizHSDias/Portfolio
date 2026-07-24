import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="project-card-img"
          onClick={() => setShow(true)}
          style={{ cursor: "pointer" }}
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
              >
                <CgWebsite /> &nbsp;
                Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="xl"
      >
        <Modal.Body
          style={{
            padding: 0,
            background: "#081B33",
          }}
        >
          <img
            src={props.imgPath}
            alt={props.title}
            style={{
              width: "100%",
              display: "block",
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;