/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import sample1 from 'json/under-construction.json';

const AnimationImg = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: sample1,
    });
    return () => {};
  }, []);
  return (
    <div
      sx={{
        maxWidth: 400,
        mx: 'auto',
        overflowX: 'hidden',
        '@media screen and (min-width: 40em)': {
          mt: 0,
        },
      }}
      ref={container}
    />
  );
};

export default AnimationImg;
