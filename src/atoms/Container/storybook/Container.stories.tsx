import type { Meta, StoryObj } from '@storybook/react';

import Container from '../Container';

import Text from '@/atoms/Text/Text';

const textAtom = <Text>This text is in a container.</Text>;

const meta: Meta<typeof Container> = {
    title: 'Atoms/Container',
    component: Container,
    argTypes: {
        as: {
            table: { defaultValue: { summary: 'div' } }
        }
    },
    parameters: {
        controls: {
            include: ['as', 'className']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        children: textAtom
    }
};
