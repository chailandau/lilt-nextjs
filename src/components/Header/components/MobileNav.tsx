import { m } from 'framer-motion';
import { FC } from 'react';

import { HeaderProps } from '../Header';

import Menu from './Menu';
import styles from './MobileNav.module.scss';

import Button from '@/components/Button/Button';
import Flex from '@/molecules/Flex';
import useStore from '@/store/useStore';
import { menuAnimations } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

const MobileNav: FC<HeaderProps> = ({ menuItems, callToAction }) => {
    const { menuOpen } = useStore();

    return (
        <LazyAnimatePresence>
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
                        <Button buttonData={callToAction} />
                    </Flex>
                )}
            </m.nav>
        </LazyAnimatePresence>
    );
};

export default MobileNav;
