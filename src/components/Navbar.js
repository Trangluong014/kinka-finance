import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function Navbar() {
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
    <nav className="navbar fixed-top bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand float-start" href="#">
          <img
            src={data.allContentfulNav.edges[0].node.icon.url}
            alt=""
            width="144"
            height="53"
          />
        </a>
        <div
          className="float-end d-flex justify-content-around"
          style={{ width: "30%", color: "white" }}
        >
          <a className="nav-link" href="#">
            Calculator
          </a>
          <a className="nav-link" href="#">
            Services
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
