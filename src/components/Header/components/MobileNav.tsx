import { m } from 'framer-motion';
import { FC, useEffect } from 'react';

import { HeaderProps } from '../Header';

import Menu from './Menu';
import styles from './MobileNav.module.scss';

import CallToAction from '@/components/CallToAction/CallToAction';
import Flex from '@/molecules/Flex/Flex';
import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

const MobileNav: FC<HeaderProps> = ({ menuItems, callToAction }) => {
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
                        {callToAction && (
                            <Flex className={styles['mobile-btn']}>
                                <CallToAction cta={callToAction} />
                            </Flex>
                        )}
                    </m.nav>
                )}
            </LazyAnimatePresence>
        )
    );
};

export default MobileNav;
