import { m } from 'framer-motion';
import { FC, useEffect, useState } from 'react';

import Menu from './Menu';
import styles from './Menu.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import { MotionIcon } from '@/atoms/Icon/Icon';
import Button from '@/molecules/Button/Button';
import useStore from '@/store/useStore';
import { dropdownAnimations, iconFlip } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

interface SubmenuProps {
    /* Menu item containing submenu */
    menuItem: Header_MenuItems;
}

const Submenu: FC<SubmenuProps> = ({ menuItem }) => {
    const { openSubmenu, setOpenSubmenu } = useStore();

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const isLaptop = useMediaQuery('screen and (min-width: 992px)');

    useEffect(() => {
        setIsSubmenuOpen(openSubmenu === menuItem?.id);
    }, [openSubmenu]);

    useEffect(() => {
        if (isLaptop) {
            setIsSubmenuOpen(false);
            setOpenSubmenu(null);
        }
    }, [isLaptop]);

    const handleMobileClick = () => {
        if (!isLaptop && openSubmenu !== menuItem?.id) {
            setOpenSubmenu(menuItem?.id);
            setIsSubmenuOpen(true);
        } else {
            setOpenSubmenu(null);
            setIsSubmenuOpen(false);
        }
    };

    const handleDesktopMouseEnter = () => {
        if (isLaptop) {
            setOpenSubmenu(menuItem?.id);
            setIsSubmenuOpen(true);
        }
    };

    const handleDesktopMouseLeave = () => {
        if (isLaptop) {
            setIsSubmenuOpen(false);
            setOpenSubmenu(null);
        }
    };

    return (
        <li
            onMouseEnter={handleDesktopMouseEnter}
            onMouseLeave={handleDesktopMouseLeave}
        >
            <Button
                variant='link'
                className={styles['submenu-btn']}
                onClick={handleMobileClick}
            >
                {menuItem.label}
                <MotionIcon
                    id='caret'
                    variants={iconFlip}
                    animate={isSubmenuOpen ? 'open' : 'closed'}
                    initial='closed'
                    exit='closed'
                />
            </Button>
            <LazyAnimatePresence>
                {isSubmenuOpen && (
                    <m.div
                        className={styles['submenu']}
                        variants={dropdownAnimations}
                        animate={isSubmenuOpen ? 'open' : 'closed'}
                        initial='closed'
                        exit='closed'
                    >
                        <Menu
                            menuItems={
                                menuItem.submenuItems as Header_MenuItems[]
                            }
                        />
                    </m.div>
                )}
            </LazyAnimatePresence>
        </li>
    );
};

export default Submenu;
