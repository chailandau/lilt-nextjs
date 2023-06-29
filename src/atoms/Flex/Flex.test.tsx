import { composeStory } from '@storybook/react';

import Meta, { Default } from './storybook/Flex.stories';

import { testAxeViolations, testHasClass, testMatchesSnapshot } from '@/utils/testHelpers';

const Flex = composeStory(Default, Meta);

describe('Flex', () => {
    testHasClass(<Flex className='test' />, 'test');
    testAxeViolations(<Flex />);
    testMatchesSnapshot(<Flex />);
});
