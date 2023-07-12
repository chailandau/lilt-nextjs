import { FC } from 'react';

import { HeaderProps } from '../Header';

import { Header_MenuItems } from '@/api/graphqlTypes';
import Link from '@/atoms/Link/Link';

interface MenuProps extends HeaderProps {
    className?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, className }) => (
    <ul className={className}>
        {menuItems?.map((menuItem) => {
            const menuItemLink =
                `${process.env.NEXT_PUBLIC_BASE_URL}/${menuItem?.internalLink?.slug}` ||
                menuItem?.externalLink ||
                '';

            return (
                menuItem?.label && (
                    <li key={menuItem?.id}>
                        <Link href={menuItemLink}>{menuItem.label}</Link>
                        {menuItem?.submenuItems && (
                            <Menu
                                menuItems={
                                    menuItem.submenuItems as Header_MenuItems[]
                                }
                            />
                        )}
                    </li>
                )
            );
        })}
    </ul>
);

export default Menu;
