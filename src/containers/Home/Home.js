import React, { Suspense } from 'react';
// import HeroLanding from './HeroLanding';
// import WhatDo from './WhatDo';

// import Testimonials from './Testimonials';

const HeroLanding = React.lazy(() => import('./HeroLanding'));
const WhatDo = React.lazy(() => import('./WhatDo'));

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
