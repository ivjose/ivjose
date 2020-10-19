/** @jsx jsx */
import { jsx, Box, Link } from 'theme-ui';
import SocialMedia from 'components/SocialMedia';

const Footer = () => (
  <Box as="footer" bg="primary" color="background" p={4}>
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span sx={{ mb: 3 }}>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Jose Santos IV, Built with
        {' '}
        <Link
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit' }}
        >
          Gatsby
        </Link>
      </span>
      <SocialMedia position="center" fill="background" light />
    </div>
  </Box>
);

export default Footer;
