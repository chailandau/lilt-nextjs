import { FC, KeyboardEvent } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';
import Submenu from './Submenu';

import Link from '@/atoms/Link/Link';
import useStore from '@/store/useStore';

export interface MenuProps extends HeaderProps {
    /** Optional classname */
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
    const menuContent = menuItems?.map((menuItem, index) => {
        const { setOpenSubmenu } = useStore();

        const handleKeyDown = (
            e: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>
        ) => {
            const isLastItem = index === menuItems?.length - 1;
            const isSubmenu = menuItem?.submenuItems === undefined;
            if (e.key === 'Tab' && !e.shiftKey && isLastItem && isSubmenu) {
                setOpenSubmenu(null);
            }
        };

        switch (menuItem?.linkType) {
            case 'internal':
                return (
                    menuItem?.internalLink?.title &&
                    menuItem?.internalLink?.slug && (
                        <li key={menuItem?.id}>
                            <Link
                                key={menuItem?.id}
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem.internalLink.slug}`}
                                className={styles['menu-link']}
                                onKeyDown={(e) => handleKeyDown(e)}
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
                                key={menuItem?.id}
                                href={menuItem.externalLink}
                                className={styles['menu-link']}
                                onKeyDown={(e) => handleKeyDown(e)}
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
