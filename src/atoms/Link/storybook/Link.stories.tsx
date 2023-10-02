import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

import Flex from '@/molecules/Flex';

const meta: Meta<typeof Link> = {
    title: 'Atoms/Link',
    component: Link,
    argTypes: {
        underlineHover: {
            control: 'boolean',
            table: { defaultValue: { summary: true } }
        },
        children: {
            control: 'text'
        }
    },
    parameters: {
        controls: {
            exclude: ['onKeyDown']
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

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: 'This is a link',
        href: 'http://localhost:6006/',
        underlineHover: true
    }
};
