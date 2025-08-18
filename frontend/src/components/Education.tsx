import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { education } from "../data/education"; // array of { school, degree, dates, gpa, highlights }

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="section-dark py-5"
      style={{ scrollMarginTop: "80px" }}
    >
      <Container>
        <h2 className="mb-4 text-center display-4" style={{ color: "#B3AF8F" }}>
          Education
        </h2>
        <Row xs={1} md={2} className="g-4">
          {education.map((edu, index) => (
            <Col key={index}>
              <Card
                className="shadow-sm rounded p-3 h-100"
                style={{ backgroundColor: "#1B263B", color: "#E0E1DD" }}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#B3AF8F" }}>
                    {edu.school}
                  </Card.Title>
                  <Card.Subtitle className="mb-2">{edu.degree}</Card.Subtitle>
                  <Card.Text>
                    <strong>Dates:</strong> {edu.dates}
                    <br />
                    <strong>GPA:</strong> {edu.gpa}
                  </Card.Text>
                  {edu.highlights &&
                    edu.highlights.map((hl, i) => (
                      <Badge key={i} bg="primary" className="me-1 mb-1">
                        {hl}
                      </Badge>
                    ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
