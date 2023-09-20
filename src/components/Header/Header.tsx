import FocusTrap from 'focus-trap-react';
import { FC, useEffect, useState } from 'react';

import Button from '../Button/Button';

import DesktopNav from './components/DesktopNav';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import { Button as ButtonType, Header_MenuItems } from '@/api/graphqlTypes';
import Logo from '@/assets/svg/Logo.svg';
import Image from '@/atoms/Image/Image';
import Link from '@/atoms/Link/Link';
import Flex from '@/molecules/Flex/Flex';
import Section from '@/molecules/Section/Section';
import useStore from '@/store/useStore';
import { laptopQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';

export interface HeaderProps {
    /* Menu items to display */
    menuItems: Header_MenuItems[] | null;
    /* CTA object */
    callToAction?: ButtonType | null;
}
const Header: FC<HeaderProps> = ({ menuItems, callToAction }) => {
    const isLaptop = useMediaQuery(laptopQuery);

    const { menuOpen, setMenuOpen } = useStore();
    const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setHeaderEl(
            document.querySelector(`.${styles['header']}`) as HTMLElement
        );
    }, []);

    useEffect(() => {
        if (isLaptop) {
            setMenuOpen(false);
        }
    }, [isLaptop]);

    return (
        <>
            <FocusTrap
                active={menuOpen}
                containerElements={headerEl ? [headerEl] : []}
            />
            <Section as='header' className={styles['header']}>
                <Link
                    href={process.env.NEXT_PUBLIC_BASE_URL as string}
                    className={styles['logo']}
                >
                    <Image src={Logo} alt='Long Island Laser Tag' priority />
                </Link>

                <Flex className={styles['right-content']}>
                    {isLaptop && (
                        <DesktopNav
                            menuItems={menuItems}
                            callToAction={callToAction}
                        />
                    )}
                    {callToAction && (
                        <Button
                            buttonData={callToAction}
                            className={styles['tablet-btn']}
                        />
                    )}
                    <MenuToggle />
                </Flex>
                {!isLaptop && menuOpen && (
                    <MobileNav
                        menuItems={menuItems}
                        callToAction={callToAction}
                    />
                )}
            </Section>
        </>
    );
};

export default Header;
