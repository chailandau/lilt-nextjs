import { composeStory } from '@storybook/react';

import { semanticTags } from './Container';
import Meta, { Default } from './storybook/Container.stories';

import {
    testAxeViolations,
    testMatchesSnapshot,
    testTags
} from '@/utils/testHelpers';

const Container = composeStory(Default, Meta);

describe('Container', () => {
    testTags(<Container />, semanticTags);
    testAxeViolations(<Container />);
    testMatchesSnapshot(<Container />);
});
