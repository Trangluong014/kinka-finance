import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import "./index.css";
import Footer from "../components/Footer";
import Calculator from "../components/Calculator";
import Header from "../components/Navbar";

const IndexPage = ({ data }) => {
  const dataRender = data.allContentfulComponent.edges;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Kinka Finance</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
          integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
          integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Open+Sans:wght@600&family=Poppins:ital,wght@0,100;0,200;1,100&family=Roboto+Mono:wght@100&family=Roboto:wght@100;300;400;500&family=Smooch+Sans:wght@200&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      <div className="main">
        <div className="row">
          {dataRender.map((item) => {
            return (
              <section
                className={item.node.config.className}
                id={item.node.config.idKey || ""}
                key={item.node.id}
                style={{
                  backgroundImage: `url(${item.node.background?.url || ""})`,
                }}
              >
                <div className="container">
                  {item.node.logo ? (
                    <img
                      src={item.node.logo.url}
                      alt=""
                      className="introLogo"
                    />
                  ) : (
                    ""
                  )}
                  <h1 className="title">{item.node.title}</h1>
                  <p
                    className="description"
                    style={{ color: `${item.node.config.style?.color || ""}` }}
                  >
                    {item.node.description?.description || ""}
                  </p>
                  {item.node.config.button ? (
                    <a
                      className="button"
                      href={item.node.config.button.link}
                      role="button"
                    >
                      {item.node.config.button.title}
                    </a>
                  ) : (
                    ""
                  )}
                  {item.node.calculator ? <Calculator /> : ""}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    allContentfulComponent(sort: { fields: order, order: ASC }) {
      edges {
        node {
          calculator
          description {
            description
          }
          logo {
            url
          }
          background {
            url
          }
          config {
            button {
              className
              element
              link
              title
            }
            className
            idKey
            style {
              color
            }
          }
          title
          id
        }
      }
    }
  }
`;

export default IndexPage;
