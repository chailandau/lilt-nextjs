import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Flex.stories';

import { testAxeAndSnapshot, testPropOptions } from '@/utils/testHelpers';

const Flex = composeStory(Default, Meta);
const flexComponent = {
    component: <Flex />
};

describe('Flex', () => {
    testPropOptions({
        ...flexComponent,
        propName: 'className',
        propOptions: ['test'],
        htmlTag: 'div'
    });
    testAxeAndSnapshot(flexComponent);
});
