import { m } from 'framer-motion';
import { FC, useEffect } from 'react';

import { HeaderProps } from '../Header';

import Menu from './Menu';
import styles from './MobileNav.module.scss';

import Button from '@/molecules/Button/Button';
import Flex from '@/molecules/Flex/Flex';
import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

const MobileNav: FC<HeaderProps> = ({ menuItems }) => {
    const { menuOpen, setMenuOpen } = useStore();

    const isMobile = useMediaQuery('(max-width: 991px)');

    useEffect(() => {
        if (!isMobile) {
            setMenuOpen(false);
        }
    }, [isMobile]);

    return (
        isMobile && (
            <LazyAnimatePresence>
                {menuOpen && (
                    <m.nav
                        className={styles['mobile-nav']}
                        variants={menuAnimations}
                        animate={menuOpen ? 'open' : 'closed'}
                        initial='closed'
                        exit='closed'
                    >
                        <Menu menuItems={menuItems} />
                        <Flex className={styles['mobile-btn']}>
                            <Button link='http://localhost:6006/'>
                                Get in touch
                            </Button>
                        </Flex>
                    </m.nav>
                )}
            </LazyAnimatePresence>
        )
    );
};

export default MobileNav;
