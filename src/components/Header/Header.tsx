import FocusTrap from 'focus-trap-react';
import { FC, useEffect, useState } from 'react';

import DesktopNav from './components/DesktopNav';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import Logo from '@/assets/svg/logo.svg';
import Image from '@/atoms/Image/Image';
import Button from '@/molecules/Button/Button';
import Flex from '@/molecules/Flex/Flex';
import Section from '@/molecules/Section/Section';
import useStore from '@/store/useStore';

export interface HeaderProps {
    /* Menu items to display */
    menuItems: Header_MenuItems[] | null;
}
const Header: FC<HeaderProps> = ({ menuItems }) => {
    const { menuOpen } = useStore();
    const [headerEl, setHeaderEl] = useState<Element | HTMLElement | null>(
        null
    );

    useEffect(() => {
        setHeaderEl(document.querySelector(`.${styles['header']}`));
    }, []);

    return (
        <>
            <FocusTrap
                active={menuOpen}
                containerElements={headerEl ? [headerEl] : []}
            />
            <Section as='header' className={styles['header']}>
                <Image
                    className={styles['logo']}
                    src={Logo}
                    alt='Long Island Laser Tag'
                    priority
                />
                <Flex className={styles['right-content']}>
                    <DesktopNav menuItems={menuItems} />
                    <Button
                        link='http://localhost:6006/'
                        className={styles['tablet-btn']}
                    >
                        Get in touch
                    </Button>
                    <MenuToggle />
                </Flex>

                <MobileNav menuItems={menuItems} />
            </Section>
        </>
    );
};

export default Header;
