import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroGif from "../assets/herooo.gif";

const Hero: React.FC = () => (
  <section
    className="py-5 section-light"
    style={{
      minHeight: "70vh",
      display: "flex",
      alignItems: "flex-start",
      paddingTop: "120px",
    }}
  >
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Left Column: Text and Button */}
        <Col md={6} className="text-start">
          <h1 className="display-4">Hi, I'm Malak Elsayed</h1>
          <p className="lead">
            Full-Stack Developer | MERN | TypeScript | React
          </p>
          <Button href="#projects" className="btn-primary btn-lg">
            View Projects
          </Button>
        </Col>

        {/* Right Column: GIF */}
        <Col md={6} className="text-center">
          <img
            src={heroGif}
            alt="Animated Introduction"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
