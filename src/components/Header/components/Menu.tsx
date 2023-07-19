import { FC } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';
import Submenu from './Submenu';

import Link from '@/atoms/Link/Link';

export interface MenuProps extends HeaderProps {
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
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
                    menuItem?.label &&
                    menuItem?.submenuItems &&
                    menuItem.submenuItems.length > 0 && (
                        <Submenu key={menuItem?.id} menuItem={menuItem} />
                    )
                );
            default:
                return;
        }
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
