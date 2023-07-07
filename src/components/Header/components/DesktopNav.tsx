import styles from './DesktopNav.module.scss';
import Menu from './Menu';

import Flex from '@/molecules/Flex/Flex';

const DesktopNav = () => (
    <Flex
        as='nav'
        className={styles['desktop-nav']}
    >
        <Menu />
    </Flex>
);

export default DesktopNav;
