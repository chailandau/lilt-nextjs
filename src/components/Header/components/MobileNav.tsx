import styles from './MobileNav.module.scss';

import Link from '@/atoms/Link/Link';
import Section from '@/molecules/Section/Section';

const MobileNav = () => (
    <Section as='nav' className={styles['mobile-nav']}>
        <ul>
            <li><Link href='http://localhost:6006/home'>Booking</Link></li>
            <li><Link href='http://localhost:6006/'>Schools & Camps</Link></li>
            <li><Link href='http://localhost:6006/'>Covid-19 Guidelines</Link></li>
        </ul>
    </Section>

);

export default MobileNav;
