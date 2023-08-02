import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { cloneElement } from 'react';

import Meta, { Default } from './storybook/Image.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Image = composeStory(Default, Meta);

describe('Image', () => {
    it('applies class if it exists', () => {
        render(cloneElement(<Image />, { className: 'image' }));
        expect(screen.getByRole('img').parentElement).toHaveClass('image');
    });
    testAxeAndSnapshot({ component: <Image /> });
});
