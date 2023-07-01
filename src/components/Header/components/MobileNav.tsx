import styles from './MobileNav.module.scss';

import Link from '@/atoms/Link/Link';
import Button from '@/molecules/Button/Button';
import Flex from '@/molecules/Flex/Flex';
import Section from '@/molecules/Section/Section';

const MobileNav = () => (
    <Section as='nav' className={styles['mobile-nav']}>
        <ul>
            <li><Link className={styles['link']} href='http://localhost:6006/home'>Booking</Link></li>
            <li><Link className={styles['link']} href='http://localhost:6006/'>Schools & Camps</Link></li>
            <li><Link className={styles['link']} href='http://localhost:6006/'>Covid-19 Guidelines</Link></li>
        </ul>
        <Flex className={styles['button-wrapper']}>
            <Button link='http://localhost:6006/'>Get in touch</Button>
        </Flex>

    </Section>

);

export default MobileNav;
