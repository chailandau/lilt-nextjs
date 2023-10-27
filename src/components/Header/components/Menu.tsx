import { FC, KeyboardEvent } from 'react';

import { HeaderProps } from '../Header';

import styles from './Menu.module.scss';
import Submenu from './Submenu';

import Link from '@/atoms/Link';
import useStore from '@/store/useStore';
import { getLink } from '@/utils/getLink';

export interface MenuProps extends HeaderProps {
    /** Optional classname */
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className = styles['menu'] }) => {
    const menuContent = menuItems?.map((menuItem, index) => {
        if (
            !menuItem.linkType ||
            (menuItem.linkType === 'external' && !menuItem.label) ||
            (menuItem.linkType === 'internal' &&
                (!menuItem?.internalLink?.slug ||
                    !menuItem.internalLink?.title))
        ) {
            return null;
        }
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

        const menuLink = getLink({
            linkType: menuItem?.linkType,
            externalLink: menuItem?.externalLink,
            internalLink: menuItem?.internalLink
        });

        const overridePageName =
            menuItem?.overridePageName && menuItem?.internalCustomLabel;

        const internalMenuLabel = overridePageName
            ? menuItem?.internalCustomLabel
            : menuItem?.internalLink?.title;

        const menuLabel =
            menuItem?.linkType === 'external'
                ? menuItem?.label
                : internalMenuLabel;

        if (menuItem?.linkType === 'submenu') {
            return (
                menuItem?.label &&
                menuItem?.submenuItems &&
                menuItem.submenuItems.length > 0 && (
                    <Submenu key={menuItem?.id} menuItem={menuItem} />
                )
            );
        } else {
            return (
                <li key={menuItem?.id}>
                    <Link
                        key={menuItem?.id}
                        href={menuLink || ''}
                        className={styles['menu-link']}
                        onKeyDown={(e) => handleKeyDown(e)}
                    >
                        {menuLabel}
                    </Link>
                </li>
            );
        }
    });

    return <ul className={className}>{menuContent}</ul>;
};

export default Menu;
