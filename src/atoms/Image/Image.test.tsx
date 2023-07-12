import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Image.stories';

import { testAxeViolations, testHasClass, testMatchesSnapshot } from '@/utils/testHelpers';

const Image = composeStory(Default, Meta);

describe('Image', () => {
    testHasClass(<Image />, 'test');
    testAxeViolations(<Image />);
    testMatchesSnapshot(<Image />);
});
