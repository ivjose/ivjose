export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 24, 28, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#353535',
    background: '#fff',
    primary: '#D14444',
    primaryHover: '#ec3454',
    secondary: '#30c',
    muted: '#f6f6f6',
    light: '#f9f9f9',
    success: '#5cb85c',
    error: '#d9534f',
    modes: {
      dark: {
        text: '#f5eded',
        background: '#283149',
        primary: '#5a6174',
        secondary: '#f73859',
        muted: '#dbedf3',
      },
    },
  },

  buttons: {
    primary: {
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease',
      fontWeight: 700,
      '&:hover': {
        bg: 'primaryHover',
        boxShadow: '0px 15px 20px #e52e2e66',
        transform: 'translateY(-3px)',
        ':disabled': {
          opacity: 0.8,
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
          transform: 'none',
        },
      },
      '&:focus': {
        outline: 'none',
      },
      ':disabled': {
        opacity: 0.8,
        cursor: 'not-allowed',
      },
    },
    secondary: {
      cursor: 'pointer',
      color: 'text',
      bg: 'background',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease',
      border: '1px solid #f6f6f6',
      fontWeight: 700,
      '&:hover': {
        boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.2)',

        transform: 'translateY(-3px)',
      },
      '&:focus': {
        outline: 'none',
      },
    },
  },
  alerts: {
    success: {
      color: 'light',
      bg: 'success',
    },
    error: {
      color: 'light',
      bg: 'error',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [5, 6],
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    spinner: {
      color: 'muted',
    },
  },
};
