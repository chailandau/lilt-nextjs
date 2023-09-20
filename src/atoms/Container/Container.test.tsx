import { composeStory } from '@storybook/react';

import { semanticTags } from './Container';
import Meta, { Default } from './storybook/Container.stories';

import { testAxeAndSnapshot, testTags } from '@/utils/testHelpers';

const Container = composeStory(Default, Meta);

const ContainerComponent = {
    component: <Container />
};

describe('Container', () => {
    testTags({ ...ContainerComponent, tags: semanticTags });
    testAxeAndSnapshot(ContainerComponent);
});
