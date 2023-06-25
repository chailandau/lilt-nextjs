// Form.test.ts|tsx

import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default, Green, White, WithLink } from './storybook/Button.stories';

import { testAxeViolations, testHasClass, testMatchesSnapshot, testRenderText } from '@/test-utils/basicTests.test';

const getButtonInfo = (Variant: typeof Default, role?: string) => ({
    variant: composeStory(Variant, Meta),
    text: Variant.args?.children || '',
    role: role || 'button',
    color: Variant.args?.color || '',
});

const buttonVariants = [
    getButtonInfo(Default),
    getButtonInfo(Green),
    getButtonInfo(White),
    getButtonInfo(WithLink, 'link')
];

buttonVariants.forEach(({ variant: Button, text, color, role }) => {
    describe(text, () => {
        if (text === 'Default button') {
            it('has default color', () => {
                render(<Button color={undefined} />);
                expect(screen.getByRole(role)).toHaveClass(color);
            });
        }
        testRenderText(<Button />, role, text);
        testHasClass(<Button />, role, color);
        testAxeViolations(<Button />);
        testMatchesSnapshot(<Button />);
    });
});

