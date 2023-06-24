// Form.test.ts|tsx

import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default, Green, White, WithLink } from './storybook/Button.stories';

const getStorybookInfo = (Variant: typeof Default, role?: string) => ({
    variant: composeStory(Variant, Meta),
    text: Variant.args?.children as string,
    role: role || 'button'
});

const buttonVariants = [
    getStorybookInfo(Default),
    getStorybookInfo(Green),
    getStorybookInfo(White),
    getStorybookInfo(WithLink, 'link')
];

buttonVariants.forEach(({ variant: Button, text, role = 'button' }) => {
    describe(text, () => {
        it('should render', () => {
            render(<Button />);
            expect(screen.getByRole(role)).toHaveTextContent(text);
        });
    });
});

