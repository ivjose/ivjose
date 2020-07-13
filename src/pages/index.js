import React from 'react';
import loadable from '@loadable/component';

import SEO from 'components/seo';
import Layout from 'components/layout';

const Home = loadable(() => import('containers/Home'));

const IndexPage = () => (
  <Layout>
    <SEO title="Front End Developer | Jose D. Santos IV" />
    <Home />
  </Layout>
);

export default IndexPage;
