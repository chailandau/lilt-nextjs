import { fireEvent, render, screen } from '@testing-library/react';

import Menu from '../Menu';

import {
    menuItemNoLabel,
    menuItemNoLinktype,
    menuItems,
    menuItemsInternalAndExternal
} from '@/components/__mocks__/Header.mock';
import { testAxeViolations, testMatchesSnapshot } from '@/utils/testHelpers';

describe('Menu component', () => {
    it('renders menu items correctly', () => {
        render(<Menu menuItems={menuItemsInternalAndExternal} />);

        const menuItemsElements = screen.getAllByRole('listitem');
        expect(menuItemsElements).toHaveLength(2);
    });

    it("doesn't render menu item if linkType is not set", () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render(<Menu menuItems={menuItemNoLinktype as any} />);
        const menuItemsElements = screen.getByRole('list').querySelector('li');

        expect(menuItemsElements).toBeNull();
    });

    it("doesn't render menu item if linkType is external and label is not set", () => {
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
    testAxeViolations({ component: <Menu menuItems={menuItems} /> });
    testMatchesSnapshot({ component: <Menu menuItems={menuItems} /> });
});
