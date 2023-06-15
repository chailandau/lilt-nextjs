import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ["../src/**/storybook/*.stories.@(js|jsx|ts|tsx)", "../src/**/storybook/*.mdx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-next",
    {
      name: '@storybook/addon-styling',
      options: {
        cssBuildRule: {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
            },
          ]
        },
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass'),
        },
        additionalData: `@import '../src/styles/main.scss';`,
      },
    },
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  staticDirs: ['../public'],
};

export default config;