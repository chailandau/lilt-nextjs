import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Flex.stories';

import {
    testAxeViolations,
    testMatchesSnapshot,
    testPropOptions
} from '@/utils/testHelpers';

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
    testAxeViolations(flexComponent);
    testMatchesSnapshot(flexComponent);
});
