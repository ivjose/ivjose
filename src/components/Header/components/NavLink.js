/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const NavLink = props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      color: 'text',
      fontWeight: '500',
      fontSize: 3,
      '@media screen and (min-width: 40em)': {
        fontSize: 1,
      },
      p: 1,
      mx: 3,
      textTransform: 'uppercase',
      position: 'relative',
      transition: 'all .2s ease-out',
      textDecoration: 'none',
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 0,
        height: 1,
        transition: 'all .2s ease-out',
        bg: 'primary',
        opacity: '.6',
      },

      '::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 0,

        height: 1,
        transition: 'all .2s ease-out',
        bg: 'primary',
        opacity: '.6',
      },

      '&:hover': {
        color: 'primary',
        '::before': {
          left: 0,
          width: '50%',
        },
        '::after': {
          right: 0,
          width: '50%',
        },
      },
      '&.active': {
        color: 'primary',
        '::before': {
          left: 0,
          width: '50%',
        },
        '::after': {
          right: 0,
          width: '50%',
        },
      },

      '&:first-of-type': {
        mt: -176,
        '@media screen and (min-width: 40em)': {
          mt: 0,
        },
      },
    }}
  />
);

export default NavLink;
