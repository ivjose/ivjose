/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { useStaticQuery, graphql } from 'gatsby';

const SocialMedia = ({ position, light, fliud }) => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allSocial_medias {
            edges {
              node {
                social_links {
                  icon_logo_dark
                  icon_logo_light
                  label
                  url {
                    ... on PRISMIC__ExternalLink {
                      target
                      _linkType
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const socialMedia = prismic.allSocial_medias.edges[0].node.social_links;

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: fliud ? 'center' : position,
        '@media screen and (min-width: 52em)': {
          justifyContent: position,
        },
      }}
    >
      {socialMedia.map(social => (
        <OutboundLink
          key={social.label}
          href={social.url.url}
          aria-label={`follow me at ${social.label}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            p: 2,
          }}
        >
          <img
            sx={{ width: 26, height: 26, mb: 0 }}
            src={light ? social.icon_logo_light.url : social.icon_logo_dark.url}
            alt={social.icon_logo_dark.alt}
          />
        </OutboundLink>
      ))}
    </div>
  );
};

SocialMedia.propTypes = {
  position: PropTypes.string,
  light: PropTypes.bool,
  fliud: PropTypes.bool,
};

SocialMedia.defaultProps = {
  position: 'start',
  light: false,
  fliud: false,
};

export default SocialMedia;
