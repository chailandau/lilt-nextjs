/** @jest-environment jsdom */

import { fireEvent, render } from '@testing-library/react';

import Header from '../../Header';
import MenuToggle from '../MenuToggle';

import { menuItems } from '@/__mocks__/Header.mock';
import { mockUseMediaQuery } from '@/__mocks__/useMediaQuery.mock';
import * as useStoreModule from '@/store/useStore';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

jest.mock('@/store/useStore', () => ({
    __esModule: true,
    ...jest.requireActual('@/store/useStore')
}));

mockUseMediaQuery(false);

describe('Menu Toggle', () => {
    it('opens navigation on click', async () => {
        const setMenuOpen = jest.fn();

        jest.spyOn(useStoreModule, 'default').mockReturnValue({
            menuOpen: false,
            setMenuOpen
        });

        const { findByRole } = render(<Header menuItems={menuItems} />);

        const button = await findByRole('button');

        fireEvent(button, new MouseEvent('click', { bubbles: true }));

        expect(setMenuOpen).toHaveBeenCalledWith(true);
        expect(button).toHaveClass('open');
    });

    testAxeAndSnapshot({ component: <MenuToggle /> });
});
