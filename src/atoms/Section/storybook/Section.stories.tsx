import type { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text/Text';
import Section from '../Section';

const textAtom = <Text>This text is in a section</Text>;

const meta: Meta<typeof Section> = {
    title: 'atoms/Section',
    component: Section,
    parameters: {
        controls: {
            exclude: ['children']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
    args: {
        children: textAtom
    }
};
