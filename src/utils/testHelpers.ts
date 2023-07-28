import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ReactElement, cloneElement } from 'react';

type Component = ReactElement;

interface TestComponent {
    component: Component;
}

interface TestRole extends TestComponent {
    role: string;
}

interface TestTag extends TestComponent {
    htmlTag: string;
}

interface TestPropOptions extends TestTag {
    propName: string;
    propOptions: readonly string[];
}

interface TestTags extends TestComponent {
    tags: readonly string[];
}

interface TestRenderText extends TestRole {
    text: string;
}

/**
 * Maps through a list of prop options from a provided array, testing that each rendered component contains the specified prop option.
 *
 * @param component - Component to test.
 * @param propName - Name of prop to pass options to.
 * @param propOptions - Array of prop options to map through.
 * @param htmlTag - HTML tag of the component.
 */
export const testPropOptions = ({
    component,
    propName,
    propOptions,
    htmlTag
}: TestPropOptions): void => {
    propOptions.forEach((propOption) => {
        it(`has '${propOption}' class`, () => {
            const { container } = render(
                cloneElement(component, { [propName]: propOption })
            );
            expect(container.querySelector(htmlTag)).toHaveClass(propOption);
        });
    });
};

/**
 * Maps through a list of tags from a provided array, testing that each rendered component
 * contains the specified tag.
 *
 * @param component - Component to render.
 * @param tags - Array of tags to map through.
 */
export const testTags = ({ component, tags }: TestTags): void => {
    tags.forEach((tag) => {
        it(`has '${tag}' tag`, () => {
            const { container } = render(cloneElement(component, { as: tag }));
            expect(container.querySelector(tag)).toBeDefined();
        });
    });
};

/**
 * Test that component renders with correct text.
 *
 * @param component - Component to render.
 * @param text - Text to render.
 */
export const testRenderText = ({ component, text }: TestRenderText): void => {
    it('renders with correct text', () => {
        const { container } = render(component);
        expect(container.textContent).toBe(text);
    });
};

/**
 * Test that children render correctly inside a Higher Order Component (HOC) component.
 *
 * @param component - Component to test.
 */
export const testRenderChildren = ({ component }: TestComponent): void => {
    it('renders children inside HOC component', () => {
        const { getByText } = render(component);
        expect(getByText('Test')).toBeDefined();
    });
};
/**
 * Test component to ensure it does not contain any axe violations.
 *
 * @param component - Component to test.
 */
export const testAxeViolations = ({ component }: TestComponent): void => {
    it('does not have axe violations', async () => {
        const { container } = render(component);
        expect(await axe(container)).toHaveNoViolations();
    });
};
/**
 * Test that component matches its snapshot.
 *
 * @param component - Component to test.
 */
export const testMatchesSnapshot = ({ component }: TestComponent): void => {
    it('matches snapshot', () => {
        const { asFragment } = render(component);
        expect(asFragment()).toMatchSnapshot();
    });
};
/**
 * Test that keydown event is fired when a key is pressed.
 *
 * @param component - Component to test.
 * @param role - Component's ARIA role.
 */
export const testKeyDown = ({ component, role }: TestRole): void => {
    it('should call onKeyDown when a key is pressed', () => {
        const onKeyDownMock = jest.fn();

        const { getByRole } = render(
            cloneElement(component, {
                onKeyDown: onKeyDownMock
            })
        );
        const linkElement = getByRole(role);
        fireEvent.keyDown(linkElement, { key: 'Enter', code: 13 });
        expect(onKeyDownMock).toHaveBeenCalledTimes(1);

        const eventObject = onKeyDownMock.mock.calls[0][0];
        expect(eventObject).toBeDefined();
        expect(eventObject.key).toBe('Enter');
    });
};
