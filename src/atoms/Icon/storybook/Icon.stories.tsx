import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../Icon';
import { iconValues } from '../Icon.types';

const meta: Meta<typeof Icon> = {
    title: 'atoms/Icon',
    component: Icon,
    argTypes: {
        id: {
            control: 'select',
            options: iconValues
        },
        size: {
            control: 'select',
            table: { defaultValue: { summary: 'sm' } }
        },
        color: {
            control: 'select',
            table: { defaultValue: { summary: 'gray' } }
        }
    },
    parameters: {
        controls: {
            exclude: ['ref']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        id: 'caret',
        size: 'sm',
        color: 'gray'
    }
};

export const Medium: Story = {
    args: {
        id: 'caret',
        size: 'md',
        color: 'gray'
    }
};

export const Large: Story = {
    args: {
        id: 'caret',
        size: 'lg',
        color: 'gray'
    }
};
