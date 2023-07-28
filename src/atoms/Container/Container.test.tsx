import { composeStory } from '@storybook/react';

import { semanticTags } from './Container';
import Meta, { Default } from './storybook/Container.stories';

import {
    testAxeViolations,
    testMatchesSnapshot,
    testTags
} from '@/utils/testHelpers';

const Container = composeStory(Default, Meta);

const ContainerComponent = {
    component: <Container />
};

describe('Container', () => {
    testTags({ ...ContainerComponent, tags: semanticTags });
    testAxeViolations(ContainerComponent);
    testMatchesSnapshot(ContainerComponent);
});
