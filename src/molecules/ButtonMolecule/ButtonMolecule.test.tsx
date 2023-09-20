import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { buttonMoleculeVariants } from './ButtonMolecule';
import Meta, { Default } from './storybook/ButtonMolecule.stories';

import {
    testAppliesClass,
    testAxeAndSnapshot,
    testKeyDown,
    testPropOptions,
    testRenderText
} from '@/utils/testHelpers';

const ButtonMolecule = composeStory(Default, Meta);

describe('Button Molecule', () => {
    const buttonMolecule = {
        component: <ButtonMolecule />
    };
    testRenderText({
        ...buttonMolecule,
        role: 'button',
        text: ButtonMolecule.args.children as string
    });
    it('has default color', () => {
        render(<ButtonMolecule variant={undefined} />);
        expect(screen.getByRole('button')).toHaveClass('blue');
    });
    testPropOptions({
        component: <ButtonMolecule />,
        propName: 'variant',
        propOptions: buttonMoleculeVariants,
        htmlTag: 'button'
    });
    it("renders 'link' correctly", () => {
        render(<ButtonMolecule link='https://google.com' />);
        expect(screen.getByRole('link').getAttribute('href')).toBe(
            'https://google.com'
        );
    });
    it("renders 'button' correctly", () => {
        render(<ButtonMolecule />);
        expect(screen.getByRole('button')).toBeDefined();
    });
    testKeyDown({ ...buttonMolecule, role: 'button' });
    testAppliesClass({ ...buttonMolecule, htmlTag: 'button' });
    testAxeAndSnapshot(buttonMolecule);
});
