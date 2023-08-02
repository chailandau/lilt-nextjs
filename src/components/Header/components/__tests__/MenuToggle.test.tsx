/** @jest-environment jsdom */

import { fireEvent, render, renderHook } from '@testing-library/react';

import Header from '../../Header';
import MenuToggle from '../MenuToggle';

import { menuItems } from '@/__mocks__/Header.mock';
import { mockUseMediaQuery } from '@/__mocks__/useMediaQuery.mock';
import useStore from '@/store/useStore';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

mockUseMediaQuery(false);

describe('Menu Toggle', () => {
    it('opens navigation on click', async () => {
        renderHook(() => useStore());

        const { findByRole } = render(<Header menuItems={menuItems} />);

        const button = await findByRole('button');

        fireEvent.click(button);

        expect(button).toHaveClass('open');
    });

    testAxeAndSnapshot({ component: <MenuToggle /> });
});
