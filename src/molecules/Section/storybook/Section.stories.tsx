import type { Meta, StoryObj } from '@storybook/react';

import Section from '../Section';

import Text from '@/atoms/Text/Text';

const textAtom = <Text>This text is in a section</Text>;

const meta: Meta<typeof Section> = {
    title: 'Molecules/Section',
    component: Section,
    argTypes: {
        as: {
            table: { defaultValue: { summary: 'section' } }
        }
    },
    parameters: {
        controls: {
            include: ['as', 'className']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
    args: {
        children: textAtom,
        className: 'section'
    }
};
