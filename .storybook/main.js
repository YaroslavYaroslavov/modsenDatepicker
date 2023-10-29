/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path');
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
  // resolve: {
  //   alias: [
  //     {
  //       find: 'src',
  //       replacement: path.resolve(__dirname, '../src'),
  //     },
  //     {
  //       find: 'helpers',
  //       replacement: path.resolve(__dirname, '../src/helpers'),
  //     },
  //     {
  //       find: 'components',
  //       replacement: path.resolve(__dirname, '../src/components'),
  //     },
  //   ],
  // },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      helpers: path.resolve(__dirname, '../src/helpers'),
      components: path.resolve(__dirname, '../src/components'),
    };
    return config;
  },
};
export default config;
