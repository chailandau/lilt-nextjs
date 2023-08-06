import { m } from 'framer-motion';
import { FC, KeyboardEvent, useEffect, useState } from 'react';

import Menu from './Menu';
import styles from './Menu.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import { MotionIcon } from '@/atoms/Icon/Icon';
import Button from '@/molecules/ButtonMolecule/ButtonMolecule';
import useStore from '@/store/useStore';
import { dropdownAnimations, iconFlip } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { laptopQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';

interface SubmenuProps {
    /* Menu item containing submenu */
    menuItem: Header_MenuItems;
}

const Submenu: FC<SubmenuProps> = ({ menuItem }) => {
    const isLaptop = useMediaQuery(laptopQuery);

    const { openSubmenu, setOpenSubmenu } = useStore();

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    useEffect(() => {
        setIsSubmenuOpen(openSubmenu === menuItem?.id);
    }, [openSubmenu]);
    useEffect(() => {
        if (isLaptop) {
            setOpenSubmenu(null);
        }
    }, [isLaptop]);

    const handleSubmenu = () => {
        if (openSubmenu !== menuItem?.id) {
            setOpenSubmenu(menuItem?.id);
        } else {
            setOpenSubmenu(null);
        }
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmenu();
        } else if (e.key === 'Tab' && e.shiftKey) {
            setOpenSubmenu(null);
        }

        return;
    };
    const handleMobileClick = () => {
        if (!isLaptop) {
            handleSubmenu();
        }
    };

    const handleDesktopMouseEnter = () => {
        if (isLaptop) {
            setOpenSubmenu(menuItem?.id);
        }
    };

    const handleDesktopMouseLeave = () => {
        if (isLaptop) {
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
                onKeyDown={(e) => handleKeyDown(e)}
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
                        variants={dropdownAnimations(isLaptop)}
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
