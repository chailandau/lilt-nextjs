import classNames from 'classnames';
import { m, useReducedMotion } from 'framer-motion';
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
    const { setMenuOpen, menuOpen, setOpenSubmenu } = useStore();
    const prefersReducedMotion = useReducedMotion() || false;

    const handleClick = () => {
        setMenuOpen(false);
        setOpenSubmenu(null);
    };

    const classList = classNames(
        styles['mobile-nav'],
        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    return (
        <LazyAnimatePresence>
            <m.nav
                className={classList}
                variants={menuAnimations(prefersReducedMotion)}
                animate={menuOpen ? 'open' : 'closed'}
                initial='closed'
                exit='closed'
            >
                <Menu menuItems={menuItems} />
                {callToAction && (
                    <Flex className={styles['mobile-btn']}>
                        <Button
                            onClick={handleClick}
                            buttonData={callToAction}
                        />
                    </Flex>
                )}
            </m.nav>
        </LazyAnimatePresence>
    );
};

export default MobileNav;
