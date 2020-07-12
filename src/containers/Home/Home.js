import React, { Suspense } from 'react';
import HeroLanding from './HeroLanding';
import WhatDo from './WhatDo';

// import Testimonials from './Testimonials';
const Home = () => (
  <article>
    <Suspense fallback={<div>Loading...</div>}>
      <HeroLanding />
      <WhatDo />
      {/* <Testimonials /> */}
    </Suspense>
  </article>
);

export default Home;
