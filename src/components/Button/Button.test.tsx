import { render, screen } from '@testing-library/react';

import {
    buttonDataExternal,
    buttonDataInternal,
    buttonDataNoLabel,
    buttonDataNoLink
} from '../../__mocks__/Button.mock';

import Button from './Button';

import { CallToAction as ButtonType } from '@/api/graphqlTypes';

const renderButton = (buttonData: ButtonType | null) => {
    render(<Button buttonData={buttonData} />);
};

const shouldButtonRender = (bool: boolean) => {
    const button = screen.queryByRole('link');
    if (bool) {
        expect(button).toBeInTheDocument();
    } else {
        expect(button).not.toBeInTheDocument();
    }
};

describe('Button Component', () => {
    it('renders with label', () => {
        renderButton(buttonDataInternal);
        shouldButtonRender(true);
    });

    it('renders with external link', () => {
        renderButton(buttonDataExternal);
        shouldButtonRender(true);
    });

    it('does not render without label', () => {
        renderButton(buttonDataNoLabel);
        shouldButtonRender(false);
    });

    it('does not render without link', () => {
        renderButton(buttonDataNoLink);
        shouldButtonRender(false);
    });

    it('returns empty object if buttonData is null', () => {
        renderButton(null);
        shouldButtonRender(false);
    });
});
