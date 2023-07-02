import styles from './DesktopNav.module.scss';

import Link from '@/atoms/Link/Link';
import Flex from '@/molecules/Flex/Flex';

const DesktopNav = () => (
    <Flex
        as='nav'
        className={styles['desktop-nav']}
    >
        <ul>
            <li><Link className={styles['link']} href='http://localhost:6006/home'>Booking</Link></li>
            <li><Link className={styles['link']} href='http://localhost:6006/'>Schools & Camps</Link></li>
            <li><Link className={styles['link']} href='http://localhost:6006/'>Covid-19 Guidelines</Link></li>
        </ul>
    </Flex>
);

export default DesktopNav;
