import { FC } from 'react';

import { HeaderProps } from '../Header';

import styles from './DesktopNav.module.scss';
import Menu from './Menu';

import Flex from '@/molecules/Flex/Flex';
import LazyMotionDom from '@/utils/framer/LazyMotionDom';

const DesktopNav: FC<HeaderProps> = ({ menuItems }) => (
    <LazyMotionDom>
        <Flex as='nav' className={styles['desktop-nav']}>
            <Menu menuItems={menuItems} />
        </Flex>
    </LazyMotionDom>
);

export default DesktopNav;
