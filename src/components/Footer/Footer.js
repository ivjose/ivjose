/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import SocialMedia from 'components/SocialMedia';
import RichText from 'components/RichText';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allFooters {
            edges {
              node {
                details
              }
            }
          }
        }
      }
    `,
  );

  const footerData = prismic.allFooters.edges[0].node.details;
  return (
    <Box as="footer" bg="primary" color="background" p={4}>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span
          sx={{
            '&  a': {
              color: 'white',
            },
          }}
        >
          <RichText render={footerData} />
        </span>

        <SocialMedia position="center" fill="background" light />
      </div>
    </Box>
  );
};

export default Footer;
