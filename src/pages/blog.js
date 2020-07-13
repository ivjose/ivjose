import React from 'react';
import loadable from '@loadable/component';

import SEO from 'components/seo';
import Layout from 'components/layout';

const UnderConstruction = loadable(() => import('components/UnderConstruction'));

const BlogPage = () => (
  <Layout>
    <SEO title="Blog | Front End Developer | Jose D. Santos IV" />
    <UnderConstruction />
  </Layout>
);

export default BlogPage;
