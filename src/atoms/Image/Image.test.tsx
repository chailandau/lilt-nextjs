import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { cloneElement } from 'react';

import Meta, { Default } from './storybook/Image.stories';

import { testAxeViolations, testMatchesSnapshot } from '@/utils/testHelpers';

const Image = composeStory(Default, Meta);

describe('Image', () => {
    const imageComponent = {
        component: <Image />
    };
    it('applies class if it exists', () => {
        render(cloneElement(<Image />, { className: 'image' }));
        expect(screen.getByRole('img').parentElement).toHaveClass('image');
    });
    testAxeViolations(imageComponent);
    testMatchesSnapshot(imageComponent);
});
