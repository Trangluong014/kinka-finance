import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function Section2() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIconIntro {
        edges {
          node {
            description {
              description
            }
            icon {
              url
            }
            id
            intro
          }
        }
      }
    }
  `);

  return (
    <section
      style={{
        heigh: "100vh",
        minHeight: "500px",
        fontFamily: "Nunito Sans",
      }}
    >
      <div className="container">
        <h1>High Quality Output, Awesome Service</h1>
        <div className="wrapContainer">
          {data.allContentfulIconIntro.edges.map((item) => {
            return (
              <div className="introCard col" key={item.node.id}>
                <img src={item.node.icon.url} alt="" width="144" height="53" />
                <h2>{item.node.intro}</h2>
                <p>{item.node.description.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Section2;
