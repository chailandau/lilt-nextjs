import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Image.stories';

import { testAxeViolations, testMatchesSnapshot } from '@/utils/testHelpers';

const Image = composeStory(Default, Meta);

describe('Flex', () => {
    testAxeViolations(<Image />);
    testMatchesSnapshot(<Image />);
});
