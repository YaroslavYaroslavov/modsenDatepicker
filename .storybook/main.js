/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path');
const config = {
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      helpers: path.resolve(__dirname, '../src/helpers'),
      components: path.resolve(__dirname, '../src/components'),
      constants: path.resolve(__dirname, '../src/constants'),
    };
    return config;
  },
};
export default config;
