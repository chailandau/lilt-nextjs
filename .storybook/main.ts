module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "storybook-addon-next"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["./public"],
};
