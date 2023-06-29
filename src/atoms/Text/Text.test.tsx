import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Text.stories';
import { textTags } from './Text';

import { testAxeViolations, testMatchesSnapshot, testTags } from '@/utils/testHelpers';

const Text = composeStory(Default, Meta);

describe('Text', () => {
    testTags(<Text />, textTags);
    testAxeViolations(<Text />);
    testMatchesSnapshot(<Text />);
});
