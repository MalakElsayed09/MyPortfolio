import React from "react";
import { Container, Card, ProgressBar, Row, Col } from "react-bootstrap";
import { skills } from "../data/skills";

const Skills: React.FC = () => (
  <section
    id="skills"
    className="py-5 section-light"
    style={{ scrollMarginTop: "80px" }}
  >
    <Container>
      <h2 className="mb-4 text-center display-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card className="shadow-sm rounded p-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.level} label={`${skill.level}%`} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;
