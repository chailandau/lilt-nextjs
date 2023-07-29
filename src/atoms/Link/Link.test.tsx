import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './storybook/Link.stories';

import {
    testAxeViolations,
    testKeyDown,
    testMatchesSnapshot,
    testRenderText
} from '@/utils/testHelpers';

const Link = composeStory(Default, Meta);
const linkComponent = {
    component: <Link />
};

describe('Link', () => {
    testRenderText({
        ...linkComponent,
        text: Link.args?.children as string,
        role: 'link'
    });
    it('defaults correctly', () => {
        render(<Link underline={undefined} href={''} />);
        expect(screen.getByRole('link')).toHaveClass('underline');
        expect(screen.getByRole('link')).toHaveAttribute('href', '');
    });
    testKeyDown({ ...linkComponent, role: 'link' });
    testAxeViolations(linkComponent);
    testMatchesSnapshot(linkComponent);
});