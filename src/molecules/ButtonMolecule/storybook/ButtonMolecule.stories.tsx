import type { Meta, StoryObj } from '@storybook/react';

import ButtonMolecule, { buttonMoleculeVariants } from '../ButtonMolecule';

import Flex from '@/molecules/Flex';

const meta: Meta<typeof ButtonMolecule> = {
    title: 'Molecules/Button',
    component: ButtonMolecule,
    argTypes: {
        variant: {
            control: 'select',
            options: buttonMoleculeVariants,
            table: { defaultValue: { summary: 'blue' } }
        },
        children: {
            control: 'text'
        },
        link: {
            control: 'text'
        }
    },
    parameters: {
        controls: {
            include: ['variant', 'children', 'link']
        }
    },

    decorators: [
        (Story) => (
            <Flex>
                <Story />
            </Flex>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof ButtonMolecule>;

export const Default: Story = {
    args: {
        variant: 'blue',
        children: 'Default button'
    }
};
