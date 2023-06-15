import type { Meta, StoryObj } from '@storybook/react';

import Section from '../../Section/Section';
import Button, { buttonColors } from '../Button';

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
