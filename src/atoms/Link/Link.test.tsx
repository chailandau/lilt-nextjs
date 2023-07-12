import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './storybook/Link.stories';

import { testAxeViolations, testMatchesSnapshot, testRenderText } from '@/utils/testHelpers';

const Link = composeStory(Default, Meta);

describe('Button', () => {
    testRenderText(<Link />, 'link', Link.args.children || '');
    it('defaults correctly', () => {
        render(<Link underline={undefined} href={''} />);
        expect(screen.getByRole('link')).toHaveClass('underline');
        expect(screen.getByRole('link')).toHaveAttribute('href', '');
    });
    testAxeViolations(<Link />);
    testMatchesSnapshot(<Link />);
});
