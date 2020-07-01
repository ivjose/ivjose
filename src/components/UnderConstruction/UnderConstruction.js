/** @jsx jsx */
import { Box, Styled, Button, jsx } from 'theme-ui';
import { Link } from 'gatsby';

import Image from './components/Image';

const UnderConstruction = () => (
  <Box p={5} sx={{ flex: '1 1 auto', textAlign: 'center' }}>
    <Image />
    <Styled.h1 sx={{ fontSize: 5, mt: 4 }}>
      This page is under construction
    </Styled.h1>
    <Button
      variant="primary"
      type="button"
      as={Link}
      mt={2}
      mx="auto"
      sx={{ display: 'inline-block' }}
      to="/"
    >
      Back to Home Page
    </Button>
  </Box>
);

export default UnderConstruction;
