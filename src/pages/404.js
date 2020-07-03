import React from 'react';
import Page404 from 'containers/Page404';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Page404 />
  </Layout>
);

export default NotFoundPage;
