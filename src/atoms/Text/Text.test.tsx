import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Text.stories';
import { textTags } from './Text';

import { testAxeAndSnapshot, testTags } from '@/utils/testHelpers';

const Text = composeStory(Default, Meta);

const textComponent = {
    component: <Text />
};

describe('Text', () => {
    testTags({ ...textComponent, tags: textTags });
    testAxeAndSnapshot(textComponent);
});
