import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  stories: ["../src/**/storybook/*.stories.@(js|jsx|ts|tsx)", "../src/**/storybook/*.mdx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-styling",
    {
      name: "@storybook/addon-styling",
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
      },
    },],
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
  staticDirs: [{ from: '../public/fonts', to: '/fonts' }],
};

export default config;