import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { buttonVariants } from './Button';
import Meta, { Default } from './storybook/Button.stories';

import {
    testAppliesClass,
    testAxeViolations,
    testKeyDown,
    testMatchesSnapshot,
    testPropOptions,
    testRenderText
} from '@/utils/testHelpers';

const Button = composeStory(Default, Meta);

describe('Button', () => {
    const buttonComponent = {
        component: <Button />
    };
    testRenderText({
        ...buttonComponent,
        role: 'button',
        text: Button.args.children as string
    });
    it('has default color', () => {
        render(<Button variant={undefined} />);
        expect(screen.getByRole('button')).toHaveClass('blue');
    });
    testPropOptions({
        component: <Button />,
        propName: 'variant',
        propOptions: buttonVariants,
        htmlTag: 'button'
    });
    it("renders 'link' correctly", () => {
        render(<Button link='https://google.com' />);
        expect(screen.getByRole('link').getAttribute('href')).toBe(
            'https://google.com'
        );
    });
    it("renders 'button' correctly", () => {
        render(<Button />);
        expect(screen.getByRole('button')).toBeDefined();
    });
    testKeyDown({ ...buttonComponent, role: 'button' });
    testAppliesClass({ ...buttonComponent, htmlTag: 'button' });
    testAxeViolations(buttonComponent);
    testMatchesSnapshot(buttonComponent);
});
