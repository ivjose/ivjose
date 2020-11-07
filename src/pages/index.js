import React from 'react';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from 'containers/Home';

const IndexPage = () => (
  <Layout>
    <SEO title="Front End Developer" />
    <Home />
  </Layout>
);

export default IndexPage;
