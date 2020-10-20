/* eslint-disable react/display-name */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const {
  registerLinkResolver,
} = require('@prismicio/gatsby-source-prismic-graphql');
const React = require('react');

const { linkResolver } = require('./src/utils/linkResolver');
const MessengerChat = require('./src/components/MessengerChat').default;

// eslint-disable-next-line react/display-name
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/display-name
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <MessengerChat />
  </>
);

registerLinkResolver(linkResolver);
