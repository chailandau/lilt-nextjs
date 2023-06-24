import { withActions } from '@storybook/addon-actions/decorator';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import type { Meta, StoryObj } from '@storybook/react';

import Button, { buttonColors } from '../Button';

import Flex from '@/atoms/Flex/Flex';

const meta: Meta<typeof Button> = {
    title: 'atoms/Button',
    component: Button,
    decorators: [
        (Story) => (
            <Flex>
                <Story />
            </Flex>
        ),
        // TS bug: https://github.com/storybookjs/storybook/issues/22384
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        withActions as any,
    ],
    argTypes: {
        onClick: { action: 'clicked' },
        color: {
            options: buttonColors,
            table: { defaultValue: { summary: 'blue' } }
        }
    },
    parameters: {
        actions: {
            handles: ['focusin button'],
        },
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

const buttonArgs = {
    color: 'blue',
    children: 'This is a button'
} as const;

export const Default: Story = {
    args: buttonArgs,
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttonEl = canvas.getByRole('button');

        await userEvent.tab();
        expect(buttonEl).toBe(document.activeElement);
        expect(canvas.getByText(buttonArgs.children));
        await userEvent.click(buttonEl);

    }
};
