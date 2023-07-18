import type { Meta, StoryObj } from '@storybook/react';

import Button, { buttonVariants } from '../Button';

import Flex from '@/molecules/Flex/Flex';

const meta: Meta<typeof Button> = {
    title: 'molecules/Button',
    component: Button,
    argTypes: {
        variant: {
            options: buttonVariants,
            table: { defaultValue: { summary: 'blue' } }
        }
    },
    parameters: {
        controls: {
            include: ['color', 'children', 'link']
        }
    },

    decorators: [
        (Story) => (
            <Flex>
                <Story />
            </Flex>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: 'blue',
        children: 'Default button'
    }
};
