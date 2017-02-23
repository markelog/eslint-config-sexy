require("./monkey-patch").addPlugins(['eslint-config-airbnb-base']);

module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),

  rules: {
    "no-param-reassign": ["off"],
    "arrow-body-style": ["off"],
    "no-console": ["off"],
    "class-methods-use-this": ["off"],
    "import/no-dynamic-require": ["off"],
    "global-require": ["off"],
    "comma-dangle": ["off"]
  }
};
