import React, { Suspense } from 'react';

const SEO = React.lazy(() => import('components/seo'));
const Layout = React.lazy(() => import('components/layout'));
const Home = React.lazy(() => import('containers/Home'));

// import SEO from 'components/seo';
// import Layout from 'components/layout';
// import Home from 'containers/Home';

const IndexPage = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <SEO title="Front End Developer | Jose D. Santos IV" />
        <Home />
      </Layout>
    </Suspense>
  </>
);

export default IndexPage;
