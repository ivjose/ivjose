module.exports = {
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    strict: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'object-curly-newline': ['error', { consistent: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'react/jsx-pascal-case': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react/jsx-one-expression-per-line': 'off',
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
};
