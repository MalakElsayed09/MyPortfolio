import React from "react";
import { Container, Card, Badge, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";

const Projects: React.FC = () => (
  <section
    id="projects"
    className="py-5 section-dark"
    style={{ scrollMarginTop: "80px" }}
  >
    <Container>
      <h2 className="mb-4 text-center display-4" style={{ color: "#B3AF8F" }}>
        Projects
      </h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm rounded">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mb-2">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      className="me-1"
                      style={{
                        backgroundColor: "#B3AF8F",
                        color: "#1B263B", // darker text for contrast
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Card.Link
                  href={project.link}
                  target="_blank"
                  className="text-decoration-none text-light"
                >
                  View Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects;
