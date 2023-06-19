import type { Meta, StoryObj } from '@storybook/react';

import Heading, { headingColors } from '../Heading';

const meta: Meta<typeof Heading> = {
    title: 'atoms/Heading',
    component: Heading,
    argTypes: {
        size: {
            control: 'select',
            table: { defaultValue: { summary: 'md' } },
        },
        as: {
            table: { defaultValue: { summary: 'h2' } },
        },
        color: {
            options: headingColors,
            table: { defaultValue: { summary: 'green' } },
        }
    },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        as: 'h2',
        size: 'md',
        children: 'This is a heading',
        color: 'green',
    },
};
