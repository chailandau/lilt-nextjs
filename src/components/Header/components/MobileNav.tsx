import styles from './MobileNav.module.scss';

import Container from '@/atoms/Container/Container';
import Link from '@/atoms/Link/Link';

const MobileNav = () => (
    <Container as='nav' className={styles['mobile-nav']}>
        <ul>
            <li><Link href='http://localhost:6006/home'>Booking</Link></li>
            <li><Link href='http://localhost:6006/'>Schools & Camps</Link></li>
            <li><Link href='http://localhost:6006/'>Covid-19 Guidelines</Link></li>
        </ul>
    </Container>

);

export default MobileNav;
