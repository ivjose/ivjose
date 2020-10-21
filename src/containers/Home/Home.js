import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroLanding from './HeroLanding';
import WhatDo from './WhatDo';

const Home = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allHome_pages {
            edges {
              node {
                hero_image
                hero_imageSharp {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 75) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
                description
                hero_section_button_link {
                  action_link
                  label
                  url
                }
                hero_title
              }
            }
          }
        }
      }
    `,
  );

  const heroLandingData = prismic.allHome_pages.edges[0].node;
  return (
    <article>
      <HeroLanding data={heroLandingData} />
      <WhatDo />
    </article>
  );
};

export default Home;
