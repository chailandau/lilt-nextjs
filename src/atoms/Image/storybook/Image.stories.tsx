import type { Meta, StoryObj } from '@storybook/react';

import Image from '../Image';

import Logo from '@/assets/svg/Logo.svg';

const meta: Meta<typeof Image> = {
    title: 'atoms/Image',
    component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: Logo,
        alt: 'Long Island Laser Tag'
    }
};
