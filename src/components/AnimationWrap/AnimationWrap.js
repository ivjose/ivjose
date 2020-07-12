import React from 'react';
import PropTypes from 'prop-types';

const AnimationWrap = ({ children, animate, delay, easing, duration }) => (
  <div
  // data-sal={animate}
  // data-sal-delay={delay}
  // data-sal-easing={easing}
  // data-sal-duration={duration}
  >
    {children}
  </div>
);

AnimationWrap.defaultProps = {
  animate: 'fade',
  delay: '500',
  easing: 'easeInOutSine',
  duration: '500',
};

AnimationWrap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  animate: PropTypes.string,
  delay: PropTypes.string,
  easing: PropTypes.string,
  duration: PropTypes.string,
};

export default AnimationWrap;
