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

export const Green: Story = {
    args: {
        color: 'green',
        children: 'Green button'
    },
};

export const White: Story = {
    args: {
        color: 'white',
        children: 'White button'
    },
};

export const WithLink: Story = {
    args: {
        color: 'blue',
        link: 'https://google.com',
        children: 'Link button'
    },
};

