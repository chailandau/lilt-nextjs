import type { Meta, StoryObj } from '@storybook/react';

import Header from '../Header';

import { buttonData } from '@/components/__mocks__/Button.mock';
import { menuItems } from '@/components/__mocks__/Header.mock';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        menuItems,
        callToAction: buttonData
    }
};
