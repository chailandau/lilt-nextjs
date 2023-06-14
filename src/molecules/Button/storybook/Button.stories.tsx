import type { Meta, StoryObj } from '@storybook/react';

import Section from '../../../molecules/Section/Section';
import Button, { buttonColors } from '../Button';

const meta: Meta<typeof Button> = {
    title: 'molecules/Button',
    component: Button,
    argTypes: {
        color: {
            options: buttonColors,
            table: { defaultValue: { summary: 'blue' } }
        }
    },
    decorators: [
        (Story) => (
            <Section>
                <Story />
            </Section>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        color: 'blue',
        children: 'This is a button'
    },
};
