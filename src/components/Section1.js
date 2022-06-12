import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  heroContainer,
  heroInsideContainer,
  heroDescription,
  heroButton,
} from "./section1.module.css";

function Section1() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeroComponent {
        edges {
          node {
            titles
            description {
              description
            }
            background {
              url
            }
            button {
              title
              url
            }
          }
        }
      }
    }
  `);

  return (
    <section
      style={{
        backgroundImage: `url(${data.allContentfulHeroComponent.edges[0].node.background.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        heigh: "67vw",
        minHeight: "500px",
        fontFamily: "Nunito Sans",
      }}
    >
      <div className={heroContainer}>
        <div className={heroInsideContainer}>
          <h1>{data.allContentfulHeroComponent.edges[0].node.titles}</h1>
          <p className={heroDescription}>
            {
              data.allContentfulHeroComponent.edges[0].node.description
                .description
            }
          </p>
          <button className={heroButton}>
            {data.allContentfulHeroComponent.edges[0].node.button.title}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
