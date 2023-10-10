import { FC } from 'react';

import { FooterProps } from '../Footer';

import Link from '@/atoms/Link';
import { getLink } from '@/utils/getLink';

const Menu: FC<FooterProps> = ({ menuItems }) => {
    const menuContent = menuItems?.map((menuItem) => {
        if (
            !menuItem.linkType ||
            (menuItem.linkType === 'external' && !menuItem.label) ||
            (menuItem.linkType === 'internal' &&
                (!menuItem?.internalLink?.slug ||
                    !menuItem.internalLink?.title))
        ) {
            return null;
        }

        const menuLink = getLink({
            linkType: menuItem?.linkType,
            externalLink: menuItem?.externalLink,
            internalLink: menuItem?.internalLink
        });

        const menuLabel =
            menuItem?.linkType === 'external'
                ? menuItem?.label
                : menuItem?.internalLink?.title;

        return (
            <li key={menuItem?.id}>
                <Link key={menuItem?.id} href={menuLink}>
                    {menuLabel}
                </Link>
            </li>
        );
    });

    return <ul>{menuContent}</ul>;
};

export default Menu;
