import path from 'node:path';

import { type StorybookConfig } from 'storybook-react-rsbuild';

import rspackConfigFn from '../rspack.config.js';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {
      strictMode: true,
    },
  },
  rsbuildFinal(config, { configType }) {
    const production = configType === 'PRODUCTION';

    // TODO: Work more.
    const _rsPack = rspackConfigFn({ production });

    config.source!.alias = {
      ...config.source?.alias,
      '@tanstack/react-router': path.join(process.cwd(), '.storybook/Router.mock.tsx'),
    };

    return config;
  },
};

export default config;
