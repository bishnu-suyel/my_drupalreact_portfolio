import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="logo"
            style={{ color: "#d3d3d3" }}
          >
            B.S
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-3" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-md-5 me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://github.com/bishnu-suyel"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 10px",
                  backgroundColor: "#333",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "4px" }}
                />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bishnu-suyel"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 10px",
                  backgroundColor: "#0077b5",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "5px",
                  fontSize: "0.8rem",
                }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ marginRight: "4px" }}
                />
                LinkedIn
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <main>{children}</main>
      </Container>
      {/* Footer */}
      <div className="custom-margin">
        <footer className="text-center bg-dark text-light py-3 fixed-bottom">
          <p>
            &copy; {new Date().getFullYear()} Bishnu Suyel. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
