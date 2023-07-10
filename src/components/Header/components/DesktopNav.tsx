import { FC } from 'react';

import { HeaderProps } from '../Header';

import styles from './DesktopNav.module.scss';
import Menu from './Menu';

import Flex from '@/molecules/Flex/Flex';

const DesktopNav: FC<HeaderProps> = ({ menuItems }) => (
    <Flex
        as='nav'
        className={styles['desktop-nav']}
    >
        <Menu menuItems={menuItems} />
    </Flex>
);

export default DesktopNav;
