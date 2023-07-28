import OutdoorTents from '@storybookAssets/images/outdoor_tents.jpg';

import type { Meta, StoryObj } from '@storybook/react';

import Image from '../Image';

const meta: Meta<typeof Image> = {
    title: 'atoms/Image',
    component: Image,
    argTypes: {
        hasBorder: {
            table: { defaultValue: { summary: false } }
        },
        priority: {
            table: { defaultValue: { summary: false } }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', maxWidth: '590px' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: OutdoorTents,
        alt: 'Camo tents outdoors next to table with laser tag equipment',
        hasBorder: true,
        priority: true
    }
};
