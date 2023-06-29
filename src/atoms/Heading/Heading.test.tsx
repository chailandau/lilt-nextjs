import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { headingColors, headingSizes, headingTags } from './Heading';
import Meta, { Default, ExtraLarge, ExtraSmall, Large, Small } from './storybook/Heading.stories';

import { testAxeViolations, testColors, testMatchesSnapshot, testSizes, testTags } from '@/utils/testHelpers';

const getHeadingInfo = (Variant: typeof Default) => ({
    variant: composeStory(Variant, Meta),
    text: Variant.args?.children || '',
    color: Variant.args?.color || '',
});

const headingVariants = [
    getHeadingInfo(Default),
    getHeadingInfo(ExtraSmall),
    getHeadingInfo(Small),
    getHeadingInfo(Large),
    getHeadingInfo(ExtraLarge)
];

describe('Heading', () => {
    const Heading = composeStory(Default, Meta);
    testSizes(<Heading />, headingSizes);
});

headingVariants.forEach(({ variant: Heading, text }) => {
    describe(text, () => {
        it('has defaults', () => {
            render(<Heading as={undefined} color={undefined} size={undefined} />);
            expect(screen.getByRole('heading')).toHaveClass('green', 'md');
            expect(screen.getByRole('heading', { level: 2 })).toBeDefined;
        });
        testTags(<Heading />, headingTags);
        testColors(<Heading />, headingColors);
        testAxeViolations(<Heading />);
        testMatchesSnapshot(<Heading />);
    });
});
