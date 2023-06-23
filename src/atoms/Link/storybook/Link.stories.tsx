import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

import Flex from '@/molecules/Flex/Flex';

const meta: Meta<typeof Link> = {
    title: 'atoms/Link',
    component: Link,
    argTypes: {
        underline: {
            control: 'boolean',
            table: { defaultValue: { summary: true } }
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

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: 'This is a link',
        href: 'http://localhost:6006/',
        underline: true
    },
};
