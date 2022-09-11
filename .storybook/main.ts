const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    };
  },
};
