import type { Meta, StoryObj } from '@storybook/react';

import CallToAction from '../CallToAction';

import Flex from '@/molecules/Flex/Flex';

const meta: Meta<typeof CallToAction> = {
    title: 'components/CallToAction',
    component: CallToAction,
    argTypes: {
        cta: {
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

type Story = StoryObj<typeof CallToAction>;

export const Default: Story = {
    args: {
        cta: {
            linkType: 'external',
            label: 'Call to action',
            externalLink: 'https://google.com'
        }
    }
};
