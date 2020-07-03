/** @jsx jsx */
import { Box, Styled, Button, jsx } from 'theme-ui';
import { Link } from 'gatsby';

import Image from './components/Image';

const Page404 = () => (
  <Box p={4} sx={{ flex: '1 1 auto', textAlign: 'center' }}>
    <Image />
    <Styled.h1
      sx={{
        fontSize: 5,
        mt: -5,
        '@media screen and (min-width: 40em)': {
          mt: '-200px',
        },
      }}
    >
      NOT FOUND
    </Styled.h1>
    <Styled.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Styled.p>
    <Button
      variant="primary"
      type="button"
      as={Link}
      mt={2}
      mx="auto"
      sx={{ display: 'inline-block', position: 'relative', zIndex: '1' }}
      to="/"
    >
      Back to Home Page
    </Button>
  </Box>
);

export default Page404;
