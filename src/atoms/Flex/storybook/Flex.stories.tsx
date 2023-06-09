import type { Meta, StoryObj } from '@storybook/react';

import Flex from '../Flex';

import Text from '@/atoms/Text/Text';

const textAtom = <Text>This text is in a flex container</Text>;

const meta: Meta<typeof Flex> = {
    title: 'atoms/Flex',
    component: Flex,
    argTypes: {
        as: {
            table: { defaultValue: { summary: 'div' } },
        }
    },
    parameters: {
        controls: {
            exclude: ['children']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
    args: {
        children: textAtom
    }
};
