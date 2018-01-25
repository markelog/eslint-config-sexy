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

  "parser": "babel-eslint",

  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0
    }],
    'react/jsx-boolean-value': ['error', 'never'],
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

    'no-underscore-dangle': ['off'],
    'consistent-return': ['off'],
    strict: ['off'],
    'react/jsx-filename-extension': ['off'],

    'guard-for-in': ['off'],
    'no-restricted-syntax': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],

    // This is broken in so many ways
    'import/no-extraneous-dependencies': ['off']
  }
};
