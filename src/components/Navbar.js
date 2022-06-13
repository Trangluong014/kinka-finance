import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNav {
        edges {
          node {
            icon {
              url
            }
          }
        }
      }
    }
  `);
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#383F50" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={data.allContentfulNav.edges[0].node.icon.url}
            alt="logo"
            style={{ width: "143.59px", height: "53px" }}
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">
                Calculator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" className="nav-link">
                Service
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
