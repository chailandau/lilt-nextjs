import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ReactElement } from 'react';
import renderer from 'react-test-renderer';

export const testHasClass = (component: ReactElement, role: string, className: string): void => {
    it('has correct class', () => {
        render(component);
        expect(screen.getByRole(role)).toHaveClass(className);
    });
};

export const testRenderText = (component: ReactElement, role: string, text: string): void => {
    it('renders with correct text', () => {
        render(component);
        expect(screen.getByRole(role)).toHaveTextContent(text);
    });
};

export const testAxeViolations = (component: ReactElement): void => {
    it('does not have axe violations', async () => {
        const { container } = render(component);
        expect(await axe(container)).toHaveNoViolations();
    });
};

export const testMatchesSnapshot = (component: ReactElement): void => {
    it('matches snapshot', () => {
        const buttonTree = renderer.create(component).toJSON();
        expect(buttonTree).toMatchSnapshot();
    });
};
