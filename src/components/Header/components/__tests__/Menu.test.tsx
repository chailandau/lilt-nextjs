import { fireEvent, render, screen } from '@testing-library/react';

import Menu from '../Menu';

import {
    menuItemNoLabel,
    menuItemNoLinktype,
    menuItems,
    menuItemsInternalAndExternal
} from '@/__mocks__/Header.mock';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

describe('Menu', () => {
    it('renders menu items correctly', () => {
        render(<Menu menuItems={menuItemsInternalAndExternal} />);

        const menuItemsElements = screen.getAllByRole('listitem');

        expect(menuItemsElements).toHaveLength(2);
    });

    it("doesn't render menu item if linkType isn't set", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render(<Menu menuItems={menuItemNoLinktype as any} />);

        const menuItemsElements = screen.getByRole('list').querySelector('li');

        expect(menuItemsElements).toBeNull();
    });

    it("doesn't render menu item if linkType is external + label isn't set", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render(<Menu menuItems={menuItemNoLabel} />);

        const menuItemsElements = screen.getByRole('list').querySelector('li');

        expect(menuItemsElements).toBeNull();
    });

    it('exits submenu on tab out', () => {
        render(<Menu menuItems={menuItems} />);

        const aboutMenu = screen.getByRole('button', {
            name: 'About'
        });

        fireEvent.keyDown(aboutMenu, { key: 'Enter' });

        const aboutSubmenu = aboutMenu.querySelector('ul');

        const ourTechLink = screen.getByRole('link', {
            name: 'Our Tech'
        });

        fireEvent.keyDown(ourTechLink, { key: 'Tab', shiftKey: false });

        expect(aboutSubmenu).not.toBeInTheDocument();
    });

    testAxeAndSnapshot({ component: <Menu menuItems={menuItems} /> });
});
