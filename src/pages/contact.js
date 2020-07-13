import React from 'react';
import loadable from '@loadable/component';

import SEO from 'components/seo';
import Layout from 'components/layout';

const Contact = loadable(() => import('containers/Contact'));

const ContactPage = () => (
  <Layout>
    <SEO title="Contact | Front End Developer | Jose D. Santos IV" />
    <Contact />
  </Layout>
);

export default ContactPage;
