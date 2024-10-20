import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/layout.css"

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
