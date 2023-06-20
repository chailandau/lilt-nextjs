import OutdoorTents from '@storybookAssets/images/outdoor_tents.jpg';
import { ImageProps as NextImageProps } from 'next/image';

import type { Meta, StoryObj } from '@storybook/react';

import Image from '../Image';

const meta: Meta<typeof Image> = {
    title: 'atoms/Image',
    component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: OutdoorTents as NextImageProps,
        alt: 'Camo tents outdoors next to table with laser tag equipment',
        hasBorder: true,
        priority: true
    }
};
