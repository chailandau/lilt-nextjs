import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { buttonColors } from './Button';
import Meta, { Default } from './storybook/Button.stories';

import { testAxeViolations, testColors, testMatchesSnapshot, testRenderText } from '@/utils/testHelpers';

const Button = composeStory(Default, Meta);

describe('Button', () => {
    testRenderText(<Button />, 'button', Button.args.children || '');
    it('has default color', () => {
        render(<Button color={undefined} />);
        expect(screen.getByRole('button')).toHaveClass('blue');
    });
    testColors(<Button />, buttonColors);
    it("renders 'link' correctly", () => {
        render(<Button link='https://google.com' />);
        expect(screen.getByRole('link'));
    });
    it("renders 'button' correctly", () => {
        render(<Button />);
        expect(screen.getByRole('button'));
    });
    testAxeViolations(<Button />);
    testMatchesSnapshot(<Button />);
});
