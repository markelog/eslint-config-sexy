# eslint-config-sexy [![travis build](https://img.shields.io/travis/markelog/eslint-config-sexy.svg?style=flat-square)](https://travis-ci.org/markelog/eslint-config-sexy)

## What
This is derative of the airbnb code-style, which uses airbnb eslint configs as a depedency.

Includes all the plugin that airbnb has, but without any need to manually install additional plugins, like [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) or [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) and etc.

Plus it doesn't require you to use some problematic or broken rules which included in airbnb config.

## Usage

Install the rules by running:

```
npm install --save-dev eslint eslint-config-sexy
```

Then add the extends to your `.eslintrc.json`:

```javascript
{
    "extends": "sexy",
    "rules": {
        // your overrides
    }
}
```

## license

MIT (see the [license](license) file).
