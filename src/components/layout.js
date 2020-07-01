/* eslint-disable no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';

import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: '100vh',
        // minHeight: 256,
      }}
    >
      <Global
        styles={() => ({
          '*': {
            boxSizing: 'border-box',
            '&::before': {
              boxSizing: 'border-box',
            },
            '&::after': {
              boxSizing: 'border-box',
            },
          },
          html: {
            height: '100%',
          },
          body: {
            height: '100%',
          },
          '#___gatsby': {
            height: '100%',
          },
          '#gatsby-focus-wrapper': {},
        })}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        sx={{
          width: '100%',
          maxWidth: 1170,
          mx: 'auto',
          px: 3,
          flex: '1 1 auto',
          // overflowX: 'hidden',
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
