/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const {
  registerLinkResolver,
} = require('@prismicio/gatsby-source-prismic-graphql');
const { linkResolver } = require('./src/utils/linkResolver');

registerLinkResolver(linkResolver);
