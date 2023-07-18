import { m } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import Link from '@/atoms/Link/Link';
import Button from '@/molecules/Button/Button';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

interface MenuProps extends HeaderProps {
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
    console.log(menuItems);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    // const handleSubmenu = () => {
    //     setSubmenuOpen(!submenuOpen);
    // };

    useEffect(() => {
        console.log('submenuOpen', submenuOpen);
    }, [submenuOpen]);

    const menuContent = menuItems?.map((menuItem) => {
        switch (menuItem?.linkType) {
            case 'internal':
                return (
                    menuItem?.internalLink?.title &&
                    menuItem?.internalLink?.slug && (
                        <li key={menuItem?.id}>
                            <Link
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem.internalLink.slug}`}
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
                            <Link href={menuItem.externalLink}>
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
                            onMouseEnter={() => setSubmenuOpen(true)}
                            onMouseLeave={() => setSubmenuOpen(false)}
                        >
                            <Button variant='link'>{menuItem.label}</Button>
                            <LazyAnimatePresence>
                                {submenuOpen && (
                                    <m.div
                                        className={styles['submenu']}
                                        variants={menuAnimations}
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
