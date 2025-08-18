import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#415A77", padding: "1rem 2rem" }}
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#"
          style={{ fontSize: "1.8rem", color: "#E0E1DD" }}
        >
          Malak Elsayed
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              style={{ fontSize: "1.2rem", color: "#E0E1DD" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{ fontSize: "1.2rem", color: "#E0E1DD" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{ fontSize: "1.2rem", color: "#E0E1DD" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#education"
              style={{ fontSize: "1.2rem", color: "#E0E1DD" }}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{ fontSize: "1.2rem", color: "#E0E1DD" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
