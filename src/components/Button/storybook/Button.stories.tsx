import type { Meta, StoryObj } from '@storybook/react';

import { buttonDataInternal } from '../../../__mocks__/Button.mock';
import Button from '../Button';

import Flex from '@/molecules/Flex';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        buttonData: {
            control: 'object'
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

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        buttonData: buttonDataInternal
    }
};
