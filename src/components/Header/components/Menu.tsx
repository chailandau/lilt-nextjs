import { m } from 'framer-motion';
import { FC, useState } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import Link from '@/atoms/Link/Link';
import Button from '@/molecules/Button/Button';
import { dropdownAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

interface MenuProps extends HeaderProps {
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const isLaptop = useMediaQuery('screen and (min-width: 991px)');

    const handleMobileClick = () => {
        !isLaptop && setSubmenuOpen(!submenuOpen);
    };
    const handleDesktopMouseEnter = () => {
        isLaptop && setSubmenuOpen(true);
    };
    const handleDesktopMouseLeave = () => {
        isLaptop && setSubmenuOpen(false);
    };

    const menuContent = menuItems?.map((menuItem) => {
        switch (menuItem?.linkType) {
            case 'internal':
                return (
                    menuItem?.internalLink?.title &&
                    menuItem?.internalLink?.slug && (
                        <li key={menuItem?.id}>
                            <Link
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem.internalLink.slug}`}
                                className={styles['menu-link']}
                            >
                                {menuItem.internalLink.title}
                            </Link>
                        </li>
                    )
                );
            case 'external':
                return (
                    menuItem?.label &&
                    menuItem?.externalLink && (
                        <li key={menuItem?.id}>
                            <Link
                                href={menuItem.externalLink}
                                className={styles['menu-link']}
                            >
                                {menuItem.label}
                            </Link>
                        </li>
                    )
                );
            case 'submenu':
                return (
                    menuItem?.submenuItems &&
                    menuItem?.label &&
                    menuItem.submenuItems.length > 0 && (
                        <li
                            key={menuItem?.id}
                            onMouseEnter={handleDesktopMouseEnter}
                            onMouseLeave={handleDesktopMouseLeave}
                        >
                            <Button
                                variant='link'
                                className={styles['submenu-btn']}
                                endIcon='caret'
                                onClick={handleMobileClick}
                            >
                                {menuItem.label}
                            </Button>
                            <LazyAnimatePresence>
                                {submenuOpen && (
                                    <m.div
                                        className={styles['submenu']}
                                        variants={dropdownAnimations}
                                        animate={
                                            submenuOpen ? 'open' : 'closed'
                                        }
                                        initial='closed'
                                        exit='closed'
                                    >
                                        <Menu
                                            menuItems={
                                                menuItem.submenuItems as Header_MenuItems[]
                                            }
                                        />
                                    </m.div>
                                )}
                            </LazyAnimatePresence>
                        </li>
                    )
                );
            default:
                return;
        }
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
