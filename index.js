'use strict';

const monkey = require('./monkey-patch');

monkey.addPlugins([
  'react',
  'jsx-a11y',
  'import'
]);

module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],

  rules: {
    'padded-blocks': ['off'],
    'no-param-reassign': ['off'],
    'arrow-body-style': ['off'],
    'no-console': ['off'],
    'class-methods-use-this': ['off'],
    'global-require': ['off'],
    'comma-dangle': ['off'],
    'no-useless-return': ['off'],
    'no-plusplus': ['off'],
    'react/require-extension': ['off'],
    'import/no-dynamic-require': ['off'],

    'guard-for-in': ['off'],
    'no-restricted-syntax': ['off'],

    // This is broken in so many ways
    'import/no-extraneous-dependencies': ['off']
  }
};
