/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ivjose-img.webp" }) {
        childImageSharp {
          sizes(maxWidth: 1000, quality: 75) {
            ...GatsbyImageSharpSizes_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Img
      // style={{ margin: '50px auto 0' }}
      sx={{
        maxWidth: '80%',
        mx: 'auto',
        mt: -40,
        '@media screen and (min-width: 52em)': {
          mt: 0,
        },
      }}
      sizes={{
        ...data.placeholderImage.childImageSharp.sizes,
      }}
      // fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default HeroImage;
