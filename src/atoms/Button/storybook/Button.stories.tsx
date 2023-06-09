import type { Meta, StoryObj } from '@storybook/react';

import Button, { buttonColors } from '../Button';

import Flex from '@/atoms/Flex/Flex';

const meta: Meta<typeof Button> = {
    title: 'atoms/Button',
    component: Button,
    argTypes: {
        color: {
            options: buttonColors,
            table: { defaultValue: { summary: 'blue' } }
        }
    },
    parameters: {
        controls: {
            include: ['color', 'children', 'link'],
        }
    },

    decorators: [
        (Story) => (
            <Flex>
                <Story />
            </Flex>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        color: 'blue',
        children: 'Default button'
    },
};
