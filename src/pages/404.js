import React from 'react';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Page404 from 'containers/Page404';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Front End Developer | Jose D. Santos IV" />
    <Page404 />
  </Layout>
);

export default NotFoundPage;
