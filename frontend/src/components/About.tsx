import React from "react";
import { Container, Card } from "react-bootstrap";

const About: React.FC = () => (
  <section
    id="about"
    className="py-5 section-light"
    style={{ scrollMarginTop: "80px" }}
  >
    <Container>
      <h2 className="mb-4 text-center display-4">About Me</h2>
      <Card className="shadow p-4 rounded">
        <Card.Body>
          <p>
            Hi! I'm Malak Elsayed, a passionate software developer specializing
            in full-stack web development.
          </p>
          <p>
            I build applications that solve real-world problems using React,
            TypeScript, and the MERN stack.
          </p>
          <p>
            I graduated from the University of Central Florida with a B.S. in
            Computer Science and a Minor in Secure Computing and Networks.
          </p>
        </Card.Body>
      </Card>
    </Container>
  </section>
);

export default About;
