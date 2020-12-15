/* eslint-disable react/forbid-prop-types */
/** @jsx jsx */
import { Button, Flex, Box, Styled, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import AnimationWrap from 'components/AnimationWrap';
import SocialMedia from 'components/SocialMedia';
import { RichText } from 'prismic-reactjs';

const HeroLanding = ({ data }) => (
  <Flex
    as="section"
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      '@media screen and (min-width: 52em)': {
        flexDirection: 'row',
        minHeight: '90vh',
      },
    }}
  >
    <Box
      p={3}
      sx={{
        flex: '1',
        textAlign: 'center',
        mt: '5',
        '@media screen and (min-width: 52em)': {
          textAlign: 'left',
          mt: '0',
        },
      }}
    >
      <AnimationWrap delay="300" duration="800">
        <Styled.h1
          sx={{
            mb: 3,
            position: 'relative',
            display: 'inline-block',
            '::after': {
              content: '""',
              width: '100%',
              height: 10,
              bg: 'primary',
              display: 'block',
              position: 'absolute',
              bottom: '5px',
              left: '15px',
              zIndex: '-1',

              opacity: '.4',
            },
          }}
        >
          {RichText.asText(data.hero_title)}
        </Styled.h1>

        {RichText.render(data.description)}

        {data.hero_section_button_link.map(link => {
          if (link.action_link === 'internal') {
            return (
              <Button
                key={link.label}
                as={Link}
                to={link.url}
                type="button"
                mb={3}
                mr={3}
              >
                {link.label}
              </Button>
            );
          }

          return (
            <Button
              key={link.label}
              as={OutboundLink}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              mb={3}
            >
              {link.label}
            </Button>
          );
        })}

        <SocialMedia fliud />
      </AnimationWrap>
    </Box>
    <Box
      p={4}
      sx={{
        flex: '1',
        width: '100%',
      }}
    >
      <AnimationWrap animate="slide-left" delay="600" duration="500">
        <Img
          sx={{
            maxWidth: '80%',
            mx: 'auto',
            mt: -40,
            '@media screen and (min-width: 52em)': {
              mt: 0,
            },
          }}
          fluid={{
            ...data.hero_imageSharp.childImageSharp.fluid,
          }}
        />
      </AnimationWrap>
    </Box>
  </Flex>
);

HeroLanding.propTypes = {
  data: PropTypes.shape({
    hero_imageSharp: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.any,
      }),
    }),
    hero_section_button_link: PropTypes.any,
    description: PropTypes.any,
    hero_title: PropTypes.any,
  }).isRequired,
};

export default HeroLanding;
