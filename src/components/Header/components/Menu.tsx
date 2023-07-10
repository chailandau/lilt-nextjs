import { FC } from 'react';

import { HeaderProps } from '../Header';

import Link from '@/atoms/Link/Link';

const Menu: FC<HeaderProps> = ({ menuItems }) => {
    console.log('pages menu', menuItems,);

    return (
        <ul>
            {menuItems?.map((menuItem) => (
                menuItem?.label && (menuItem?.internalLink || menuItem?.externalLink) &&
                <li key={menuItem?.id}>
                    <Link href={menuItem?.internalLink as string || menuItem?.externalLink || ''}>{menuItem.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
