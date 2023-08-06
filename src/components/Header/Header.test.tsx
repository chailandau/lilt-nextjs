import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-test-renderer';

import DesktopNav from './components/DesktopNav';
import Menu from './components/Menu';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import Header from './Header';

import {
    menuItemNoLabel,
    menuItemNoLinktype,
    menuItems,
    menuItemsInternalAndExternal
} from '@/__mocks__/Header.mock';
import { mockIsLaptop } from '@/__mocks__/useMediaQuery.mock';
import { testAxeAndSnapshot } from '@/utils/testHelpers';

describe('Header', () => {
    describe('Menu', () => {
        it('renders menu items correctly', () => {
            render(<Menu menuItems={menuItemsInternalAndExternal} />);

            const menuItemsElements = screen.getAllByRole('listitem');

            expect(menuItemsElements).toHaveLength(2);
        });

        it("doesn't render menu item if linkType not set", () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render(<Menu menuItems={menuItemNoLinktype as any} />);

            const menuItemsElements = screen
                .getByRole('list')
                .querySelector('li');

            expect(menuItemsElements).toBeNull();
        });

        it("doesn't render menu item if linkType is external + label isn't set", () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            render(<Menu menuItems={menuItemNoLabel} />);

            const menuItemsElements = screen
                .getByRole('list')
                .querySelector('li');

            expect(menuItemsElements).toBeNull();
        });
        describe('Submenu', () => {
            let aboutMenu: HTMLElement;
            let aboutSubmenu: HTMLUListElement | null;
            let ourTechLink: Node | Window;

            beforeEach(() => {
                render(<Menu menuItems={menuItems} />);

                aboutMenu = screen.getByRole('button', {
                    name: 'About'
                });

                fireEvent.keyDown(aboutMenu, { key: 'Enter' });

                aboutSubmenu = aboutMenu.querySelector('ul');

                ourTechLink = screen.getByRole('link', {
                    name: 'Our Tech'
                });
            });

            it('exits submenu on tab forward', () => {
                fireEvent.keyDown(ourTechLink, { key: 'Tab', shiftKey: false });

                expect(aboutSubmenu).not.toBeInTheDocument();
            });
            it('exits submenu on tab backward', () => {
                fireEvent.keyDown(aboutMenu, { key: 'Tab', shiftKey: true });

                expect(aboutSubmenu).not.toBeInTheDocument();
            });
            it('exits submenu when enter is clicked again', () => {
                fireEvent.keyDown(aboutMenu, { key: 'Enter' });

                expect(aboutSubmenu).not.toBeInTheDocument();
            });
        });

        testAxeAndSnapshot({ component: <Menu menuItems={menuItems} /> });
    });
    describe('Menu Toggle', () => {
        it('opens navigation on click', async () => {
            const header = render(<Header menuItems={menuItems} />);

            const menuToggle = await header.findByLabelText('menu toggle');

            fireEvent.click(menuToggle);

            expect(menuToggle).toHaveClass('open');
        });

        testAxeAndSnapshot({ component: <MenuToggle /> });
    });
    describe('Mobile Nav', () => {
        beforeEach(async () => {
            act(() => {
                mockIsLaptop(false);
            });
            render(<Header menuItems={menuItems} />);
            fireEvent.click(await screen.findByLabelText('menu toggle'));
        });
        it('removes mobile nav when isLaptop is true', async () => {
            act(() => {
                mockIsLaptop(true);
            });

            expect(await screen.findByRole('navigation')).not.toHaveClass(
                'mobile-nav'
            );
        });
        it('opens submenu on button click', async () => {
            fireEvent.click(screen.getByRole('button', { name: 'About' }));
            screen.debug();
            expect(await screen.findByText('Our Tech')).toBeInTheDocument();
        });
        testAxeAndSnapshot({ component: <MobileNav menuItems={menuItems} /> });
    });
    describe('DesktopNav', () => {
        const DesktopNavEl = <DesktopNav menuItems={menuItems} />;
        beforeEach(() => {
            render(DesktopNavEl);
            act(() => {
                mockIsLaptop(true);
            });
        });

        it('renders correctly', () => {
            expect(screen.getByRole('navigation')).toBeInTheDocument();
        });

        it('ignores submenu button click', () => {
            fireEvent.click(screen.getByRole('button', { name: 'About' }));
            expect(screen.queryByText('Our Tech')).not.toBeInTheDocument();
        });

        it('opens and closes submenu on mouse enter and leave', async () => {
            fireEvent.mouseEnter(screen.getByRole('button', { name: 'About' }));

            await waitFor(async () =>
                expect(screen.queryByText('Our Tech')).toBeInTheDocument()
            );
            fireEvent.mouseLeave(screen.getByRole('button', { name: 'About' }));

            await waitFor(async () =>
                expect(screen.queryByText('Our Tech')).not.toBeInTheDocument()
            );
        });

        testAxeAndSnapshot({ component: DesktopNavEl });
    });
});
