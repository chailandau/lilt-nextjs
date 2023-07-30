import { FC } from 'react';

import { HeaderProps } from '../Header';

/**
 * Flex (and its styles) must be imported before
 * current styles for proper Storybook rendering
 */
// eslint-disable-next-line import/order
import Flex from '@/molecules/Flex/Flex';
import styles from './DesktopNav.module.scss';
import Menu from './Menu';

import LazyMotionDom from '@/utils/framer/LazyMotionDom';

const DesktopNav: FC<HeaderProps> = ({ menuItems }) => (
    <LazyMotionDom>
        <Flex as='nav' className={styles['desktop-nav']}>
            <Menu menuItems={menuItems} />
        </Flex>
    </LazyMotionDom>
);

export default DesktopNav;
