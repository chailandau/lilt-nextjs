import { m } from 'framer-motion';

import styles from './MobileNav.module.scss';

import Link from '@/atoms/Link/Link';
import Button from '@/molecules/Button/Button';
import Flex from '@/molecules/Flex/Flex';
import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

const MobileNav = () => {
    const menuOpen = useStore((state) => state.menuOpen);

    return (
        <LazyAnimatePresence>
            {menuOpen &&
                <m.nav
                    className={styles['mobile-nav']}
                    variants={menuAnimations}
                    animate={menuOpen ? 'open' : 'closed'}
                    initial="closed"
                    exit="closed"
                >
                    <ul>
                        <li><Link className={styles['link']} href='http://localhost:6006/home'>Booking</Link></li>
                        <li><Link className={styles['link']} href='http://localhost:6006/'>Schools & Camps</Link></li>
                        <li><Link className={styles['link']} href='http://localhost:6006/'>Covid-19 Guidelines</Link></li>
                    </ul>
                    <Flex className={styles['button-wrapper']}>
                        <Button link='http://localhost:6006/'>Get in touch</Button>
                    </Flex>
                </m.nav>
            }

        </LazyAnimatePresence>
    );
};

export default MobileNav;
