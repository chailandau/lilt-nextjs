import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  stories: ["../src/**/storybook/*.stories.@(js|jsx|ts|tsx)", "../src/**/storybook/*.mdx"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-css-modules-preset",
    '@storybook/addon-styling'
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  staticDirs: ['../public', './public'],

};

export default config;
