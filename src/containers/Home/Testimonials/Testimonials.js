/** @jsx jsx */
import { Flex, Box, Styled, jsx } from 'theme-ui';
// import PropTypes from 'prop-types';
import BlockqouteSvg from 'images/svg/BlockqouteSvg';
import Heading from 'components/Heading';

import UserImage from './components/UserImage';

const Testimonials = () => {
  const data = [
    {
      name: 'Jose Santos',
      position: 'CEO | SAMSUNG PH',
      img: <UserImage />,
      testimonial:
        'I am always open to discuss your project, improve your online presence or help with your UX/UI design challenges.',
    },
  ];

  return (
    <section sx={{ mb: 6, textAlign: 'center' }}>
      <Heading text="Client Testimonials" />
      <Flex
        as="blockquote"
        p={4}
        color="white"
        sx={{
          maxWidth: 600,
          width: '90%',
          mt: 5,
          mx: 'auto',
          flexDirection: 'column',
          position: 'relative',
          '@media screen and (min-width: 52em)': {
            width: '100%',
            flexDirection: 'row',
          },
          '::after': {
            content: '""',
            display: 'block',

            boxShadow: '0px 15px 20px #e52e2e66',
            bg: 'primary',
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: -1,

            '@media screen and (min-width: 52em)': {
              transform: 'skew(-9deg, 0deg)',
              width: '100%',
              flexDirection: 'row',
            },
          },
        }}
      >
        <BlockqouteSvg
          width={40}
          height={40}
          sx={{
            fill: '#353535',
            width: 100,
            position: 'absolute',
            top: '1',
            left: '50%',
            zIndex: 1,
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            '@media screen and (min-width: 52em)': {
              left: 0,
              top: 0,
              marginLeft: -34,
              marginTop: 2,
              transform: 'none',
            },
          }}
        />
        <Box
          p={2}
          sx={{
            width: '100%',
            mx: 'auto',
            '@media screen and (min-width: 52em)': {
              width: 300,
            },
          }}
        >
          <UserImage />
        </Box>
        <Box
          p={2}
          sx={{
            textAlign: 'center',
            '@media screen and (min-width: 52em)': {
              textAlign: 'right',
            },
          }}
        >
          <Styled.p
            sx={{
              color: 'background',
            }}
          >
            I am always open to discuss your project, improve your online
            presence or help with your UX/UI design challenges.
          </Styled.p>
          <Styled.h3
            sx={{
              color: 'background',
            }}
          >
            Jose
          </Styled.h3>
        </Box>
      </Flex>
    </section>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
