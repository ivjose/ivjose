import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Contact from 'containers/Contact';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Contact />
  </Layout>
);

export default ContactPage;
