/** @jsx jsx */
import { Flex, Box, Styled, jsx, Button } from 'theme-ui';
import { Link } from 'gatsby';
import AnimationWrap from 'components/AnimationWrap';
import Heading from 'components/Heading';

import AnimationImg from './components/AnimationImg';

const WhatDo = () => (
  <section sx={{ py: 50, textAlign: 'center' }}>
    <Heading text="What I do" />
    <Flex
      as="div"
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        '@media screen and (min-width: 52em)': {
          flexDirection: 'row',
          minHeight: '60vh',
          '@media screen and (min-width: 52em)': {
            mt: -50,
          },
        },
      }}
    >
      <Box
        p={3}
        sx={{
          flex: '1',
          width: '100%',
        }}
      >
        <AnimationWrap animate="slide-right" delay="600" duration="500">
          <AnimationImg />
        </AnimationWrap>
      </Box>
      <Box
        p={3}
        sx={{
          flex: '1',
          textAlign: 'left',
          mt: -40,
          '@media screen and (min-width: 52em)': {
            mt: 0,
          },
        }}
      >
        <AnimationWrap delay="300" duration="800">
          <Styled.h3
            sx={{
              mb: 3,
            }}
          >
            Design and Development
          </Styled.h3>
          <Styled.p
            sx={{
              mb: 0,
            }}
          >
            I provide
            {' '}
            <strong>designs</strong>
            {' '}
            that help you improve your
            {' '}
            <strong>brand</strong>
            {' '}
            and
            {' '}
            <strong>business</strong>
            {' '}
            needs. It is
            {' '}
            <strong>developed</strong>
            {' '}
            with a
            {' '}
            <strong>fast loading page</strong>
            {' '}
            ,
            <strong>SEO ready</strong>
            , and
            {' '}
            <strong>mobile responsive</strong>
            {' '}
            on the fly.
          </Styled.p>
          <Button as={Link} to="/services" type="button" mt={4}>
            SEE MY SERVICES
          </Button>
        </AnimationWrap>
      </Box>
    </Flex>
  </section>
);
export default WhatDo;
