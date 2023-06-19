import type { Meta, StoryObj } from '@storybook/react';

import Text, { textTags } from '../Text';

const meta: Meta<typeof Text> = {
    title: 'atoms/Text',
    component: Text,
    argTypes: {
        as: {
            options: textTags,
            table: { defaultValue: { summary: 'p' } }
        }
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        as: 'p',
        children: 'This is text.'
    },
};
