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
    <nav className="navbar" style={{ backgroundColor: "#383F50" }}>
      <div className="container-fluid">
        <a className="navbar-brand float-start" href="#">
          <img
            src={data.allContentfulNav.edges[0].node.icon.url}
            alt="logo"
            style={{ width: "143.59px", height: "53px" }}
          />
        </a>

        <div
          className="float-end d-flex justify-content-around"
          style={{
            color: "white",
            opacity: 0.6,
            fontSize: "18px",
            lineHeight: "32.4px",
            fontWeight: "400",
          }}
        >
          <a className="nav-link" style={{ marginRight: "10px" }} href="#">
            Calculator
          </a>
          <a className="nav-link" href="#">
            Services
          </a>
        </div>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <a href="#" className="navbar-brand">
    //       <img
    //         src={data.allContentfulNav.edges[0].node.icon.url}
    //         alt="logo"
    //         style={{ width: "143.59px", height: "53px" }}
    //       />
    //     </a>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo02"
    //       aria-controls="navbarTogglerDemo02"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse"
    //       id="navbarTogglerDemo02"
    //       toggle="collapse"
    //       data-target=".navbar-collapse"
    //     >
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Calculator
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link active" href="#">
    //             Service
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
