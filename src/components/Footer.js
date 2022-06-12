import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./footer.css";

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        nodes {
          logo {
            url
          }
          logoSocial {
            url
          }
        }
      }
    }
  `);
  return (
    <footer>
      <div
        className="container"
        style={{
          color: "#40434A",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <div className="row">
          <div className="col-lg-6 footerLeft">
            <div className="container">
              <img
                className="logo"
                src={data.allContentfulFooter.nodes[0].logo.url}
                alt="logo"
              />
              <p className="footerDescription">
                2021 Award winning Finance Advisor and Lorem ipsum dolor sit
                amet
              </p>
              <div
                className="socialLogo"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                {data.allContentfulFooter.nodes[0].logoSocial.map((item) => {
                  return (
                    <img className="socialLogoIcon" src={item.url} alt="" />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-4">
                <ul>
                  <li className="liTitle">Locations </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">America </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Asia </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Europe </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Africa </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li className="liTitle">Contact </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">About Me </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Teams </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#"> Profile </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">FAQ </a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li className="liTitle">Legals </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Privacy </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Disclaimer </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Terms </a>
                  </li>
                  <li className="liInfo">
                    {" "}
                    <a href="#">Company </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
