/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import { Flex, Box, jsx } from 'theme-ui';
import { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import ImageLogo from './components/ImageLogo';
import ToggleMenu from './components/ToggleMenu';
import NavLink from './components/NavLink';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allNavigations {
            edges {
              node {
                navigation_links {
                  label
                  path_url
                }
                branding
              }
            }
          }
        }
      }
    `,
  );

  const menuLinks = prismic.allNavigations.edges[0].node.navigation_links;

  return (
    <header
      sx={{
        p: 3,
        background: 'white',
        boxShadow: '1px 1px 12px 4px #3e408414',
        width: '100%',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Flex
        sx={{
          maxWidth: 1170,
          mx: 'auto',
          px: 3,
          alignItems: 'center',
        }}
      >
        <Box>
          <Link to="/" aria-label="home page">
            <ImageLogo />
          </Link>
        </Box>
        <Box
          sx={{
            flex: '1',
            '@media screen and (max-width: 40em)': {
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
          }}
        >
          <ToggleMenu setToggle={setToggle} open={toggle} />
          <Flex
            as="nav"
            sx={{
              justifyContent: 'flex-end',
              '@media screen and (max-width: 40em)': {
                position: 'fixed',
                top: 0,
                left: toggle ? 0 : '-100%',
                height: '100%',
                width: '100%',
                zIndex: toggle ? 1 : -2,

                bg: 'background',
                mt: 63,
                opacity: toggle ? 1 : 0,
                transition: 'all 0.5s ease',

                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              },
            }}
          >
            {menuLinks.map(link => (
              <NavLink key={link.label} to={link.path_url}>
                {link.label}
              </NavLink>
            ))}
          </Flex>
        </Box>
      </Flex>
    </header>
  );
};

Header.propTypes = {
  // siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
