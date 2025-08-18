import React, { JSX } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-5 section-light"
      style={{ scrollMarginTop: "50px" }}
    >
      <Container>
        <h2 className="mb-4 text-center display-4" style={{ color: "#1B263B" }}>
          Contact Me
        </h2>

        <Card
          className="shadow-sm rounded p-4 mx-auto"
          style={{ maxWidth: "600px", backgroundColor: "#E0E1DD" }}
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send
            </Button>
          </Form>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a
              href="https://github.com/MalakElsayed09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {FaGithub({ size: 30, color: "#1B263B" }) as JSX.Element}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/elsayedMal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {FaLinkedin({ size: 30, color: "#1B263B" }) as JSX.Element}
              </span>
            </a>
            <a href="mailto:elsayedmalak93@gmail.com">
              <span>
                {FaEnvelope({ size: 30, color: "#1B263B" }) as JSX.Element}
              </span>
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
