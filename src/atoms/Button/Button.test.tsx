// Form.test.ts|tsx

import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Meta, { Default, Green, White, WithLink } from './storybook/Button.stories';

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
        it('renders', () => {
            render(<Button />);
            expect(screen.getByRole(role)).toHaveTextContent(text);
        });
        it('has correct class', () => {
            render(<Button />);
            expect(screen.getByRole(role)).toHaveClass(color);
        }),
            it('matches snapshot', () => {
                const tree = renderer.create(<Button />).toJSON();
                expect(tree).toMatchSnapshot();
            });
    });
});

