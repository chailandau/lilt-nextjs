// Form.test.ts|tsx

import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
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
        expect.extend(toHaveNoViolations);
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
        });
        it('passes basic accessibility test', async () => {
            const { container } = render(<Button />);
            expect(await axe(container)).toHaveNoViolations();
        });
        it('matches snapshot', () => {
            const buttonTree = renderer.create(<Button />).toJSON();
            expect(buttonTree).toMatchSnapshot();
        });
    });
});

