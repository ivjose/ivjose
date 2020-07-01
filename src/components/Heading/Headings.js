/** @jsx jsx */
import { Heading as CustomHeading, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

const Headings = ({ text }) => (
  <CustomHeading
    as="h2"
    mb="0"
    sx={{
      position: 'relative',
      display: 'inline-block',
      mx: 'auto',
      '::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: '2px',
        left: '15px',
        zIndex: '-1',
        width: '100%',

        height: 10,
        bg: 'primary',
        opacity: '.4',
      },
    }}
  >
    {text}
  </CustomHeading>
);

Headings.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Headings;
