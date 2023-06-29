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
        children: 'Default heading',
        color: 'green',
    },
};

export const ExtraSmall: Story = {
    args: {
        as: 'h2',
        size: 'xs',
        children: 'Extra small heading',
        color: 'green',
    },
};

export const Small: Story = {
    args: {
        as: 'h2',
        size: 'sm',
        children: 'Small heading',
        color: 'green',
    },
};

export const Large: Story = {
    args: {
        as: 'h2',
        size: 'lg',
        children: 'Large heading',
        color: 'green',
    },
};

export const ExtraLarge: Story = {
    args: {
        as: 'h2',
        size: 'xl',
        children: 'Extra large heading',
        color: 'green',
    },
};
