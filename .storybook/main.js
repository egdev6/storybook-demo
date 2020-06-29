const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
stories: ['../src/storybook/**/*.stories.@(js|mdx)'],
addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/theming',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register'
  ],
};