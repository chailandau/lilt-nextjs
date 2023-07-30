import "../src/assets/fonts/fonts.css";
import "../src/styles/main.scss";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Components', '*'],
      },
      showPanel: true,
      panelPosition: 'bottom',
    },
  },
};

export default preview;
