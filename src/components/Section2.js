import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  introCard,
  cardWrap,
  section,
  introContainer,
} from "./section2.module.css";

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
        heigh: "67vw",
        minHeight: "500px",
        fontFamily: "Nunito Sans",
      }}
      className={section}
    >
      <div className={introContainer}>
        <h1>High Quality Output, Awesome Service</h1>
        <div className={cardWrap}>
          {data.allContentfulIconIntro.edges.map((item) => {
            return (
              <div className={introCard} key={item.node.id}>
                <img
                  src={item.node.icon.url}
                  alt=""
                  width="100rem"
                  height="100rem"
                />
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
