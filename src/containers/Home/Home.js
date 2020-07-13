import React from 'react';
import loadable from '@loadable/component';

const WhatDo = loadable(() => import('./WhatDo'));
const HeroLanding = loadable(() => import('./HeroLanding'));
// const Testimonials = loadable(() => import('./Testimonials'));

const Home = () => (
  <article>
    <HeroLanding />
    <WhatDo />
    {/* <Testimonials /> */}
  </article>
);

export default Home;
