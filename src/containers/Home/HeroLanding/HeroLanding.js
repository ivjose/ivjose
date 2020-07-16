/** @jsx jsx */
import { Button, Flex, Box, Styled, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import AnimationWrap from 'components/AnimationWrap';
import SocialMedia from 'components/SocialMedia';

import HeroImage from './components/HeroImage';

const HeroLanding = () => (
  <Flex
    as="section"
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      '@media screen and (min-width: 52em)': {
        flexDirection: 'row',
        minHeight: '90vh',
        // py: 50,
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
          Jose Santos IV
        </Styled.h1>
        <Styled.p sx={{ mb: 0 }}>
          I’m a freelance
          {' '}
          <strong>Front End Developer</strong>
          {' '}
          specializing in
          {' '}
          <strong>React</strong>
          {' '}
          and in building a web interface with better
          user experiences. Do you need a website?
        </Styled.p>

        <Button as={Link} to="/contact/" type="button" my={1} mr={3}>
          LET&apos;S TALK
        </Button>

        <Button
          as={OutboundLink}
          href="https://docs.google.com/document/d/1gaebALsWmZ8L58KLGnij-_5Qt9jtnY8ob9MGn_c0zi8"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          my={4}
        >
          MY RESUME
        </Button>

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
        <HeroImage />
      </AnimationWrap>
    </Box>
  </Flex>
);

export default HeroLanding;
