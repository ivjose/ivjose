import React from 'react';
import loadable from '@loadable/component';

import SEO from 'components/seo';
import Layout from 'components/layout';

const Page404 = loadable(() => import('containers/Page404'));

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Front End Developer | Jose D. Santos IV" />
    <Page404 />
  </Layout>
);

export default NotFoundPage;
