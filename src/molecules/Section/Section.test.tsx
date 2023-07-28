import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './storybook/Section.stories';

import { testAxeViolations, testMatchesSnapshot } from '@/utils/testHelpers';

const Section = composeStory(Default, Meta);
const sectionComponent = {
    component: <Section />
};

describe('Section', () => {
    it('defaults to section tag', () => {
        render(<Section as={undefined} />);
        expect(
            screen.getByText('This text is in a section').closest('section')
        ).toBeDefined();
    });
    it('applies correct class', () => {
        render(<Section />);
        expect(
            screen.getByText('This text is in a section').closest('section')
        ).toHaveClass('section');
    });
    testAxeViolations(sectionComponent);
    testMatchesSnapshot(sectionComponent);
});
