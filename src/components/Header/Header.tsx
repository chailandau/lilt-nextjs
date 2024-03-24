'use client';

import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { FC, useEffect, useState } from 'react';

import Button from '../Button/Button';

import DesktopNav from './components/DesktopNav';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import { CallToAction, Header_MenuItems } from '@/api/graphqlTypes';
import lilgLogo from '@/assets/svg/lilg/Logo.svg';
import liltLogo from '@/assets/svg/lilt/Logo.svg';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import useStore from '@/store/useStore';
import { laptopQuery, useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { setNoScroll } from '@/utils/setNoScroll';

export interface HeaderProps {
    /* Menu items to display */
    menuItems: Header_MenuItems[] | null;
    /* CTA object */
    callToAction?: CallToAction | null;
}

const greenTheme = process.env.NEXT_PUBLIC_THEME === 'green-theme';

const Header: FC<HeaderProps> = ({ menuItems, callToAction }) => {
    const [isSticky, setIsSticky] = useState(false);

    const isLaptop = useMediaQuery(laptopQuery);

    const { menuOpen, setMenuOpen, setOpenSubmenu } = useStore();

    useEffect(() => {
        if (isLaptop) {
            setMenuOpen(false);
        }
    }, [isLaptop]);

    useEffect(() => {
        setNoScroll(menuOpen);
    }, [menuOpen]);

    const handleLogoClick = () => {
        setMenuOpen(false);
        setOpenSubmenu(null);
    };

    useEffect(() => {
        const toggleSticky = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', toggleSticky, { passive: true });

        return () => {
            window.removeEventListener('scroll', toggleSticky);
        };
    }, []);

    const classList = classNames(
        styles['header'],
        isSticky && styles['header__sticky'],
        menuOpen && styles['header__menu-open'],
        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    return (
        <FocusTrap active={menuOpen}>
            <Flex as='header' className={classList}>
                <Section className={styles['header__content']}>
                    <Link
                        href={process.env.NEXT_PUBLIC_BASE_URL as string}
                        className={styles['logo']}
                        onClick={handleLogoClick}
                    >
                        <Image
                            src={greenTheme ? lilgLogo : liltLogo}
                            alt={
                                greenTheme
                                    ? 'Long Island Mini Golf'
                                    : 'Long Island Laser Tag'
                            }
                            hasBorder={false}
                            priority
                        />
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
            </Flex>
        </FocusTrap>
    );
};

export default Header;
