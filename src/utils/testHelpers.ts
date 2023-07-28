import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ReactElement, cloneElement } from 'react';
import renderer from 'react-test-renderer';

export const testHasClass = (
    component: ReactElement,
    className: string
): void => {
    it(`has '${className}' class`, () => {
        render(cloneElement(component, { className }));
        const elements = screen.queryAllByRole('generic');
        const hasClass = elements.some((element) =>
            element.classList.contains(className)
        );
        expect(hasClass).toBe(true);
    });
};
export const testClasses = (
    component: ReactElement,
    classes: readonly string[]
): void => {
    classes.forEach((className) => {
        it(`has '${className}' class`, () => {
            const tree = renderer
                .create(cloneElement(component, { className }))
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
};

export const testSizes = (
    component: ReactElement,
    sizes: readonly string[]
): void => {
    sizes.forEach((size) => {
        it(`has '${size}' class`, () => {
            const tree = renderer
                .create(cloneElement(component, { size }))
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
};

export const testColors = (
    component: ReactElement,
    colors: readonly string[]
): void => {
    colors.forEach((color) => {
        it(`has '${color}' class`, () => {
            const tree = renderer
                .create(cloneElement(component, { color }))
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
};

export const testTags = (
    component: ReactElement,
    tags: readonly string[]
): void => {
    tags.forEach((tag) => {
        it(`matches '${tag}' snapshot`, () => {
            const containerTree = renderer
                .create(cloneElement(component, { as: tag }))
                .toJSON();
            expect(containerTree).toMatchSnapshot();
        });
    });
};

export const testRenderText = (
    component: ReactElement,
    role: string,
    text: string
): void => {
    it('renders with correct text', () => {
        render(component);
        expect(screen.getByRole(role)).toHaveTextContent(text);
    });
};

export const testRenderChildren = (component: ReactElement): void => {
    it('renders children inside HOC component', () => {
        const renderResult = render(component);
        expect(renderResult.getByText('Test')).toBeInTheDocument();
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
