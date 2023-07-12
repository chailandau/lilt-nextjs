import classNames from 'classnames';
import { FC } from 'react';

import DesktopNav from './components/DesktopNav';
import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import { Header_MenuItems } from '@/api/graphqlTypes';
import Logo from '@/assets/svg/Logo.svg';
import Image from '@/atoms/Image/Image';
import Button from '@/molecules/Button/Button';
import Flex from '@/molecules/Flex/Flex';
import Section from '@/molecules/Section/Section';

export interface HeaderProps {
    menuItems: Header_MenuItems[] | null;
}

const Header: FC<HeaderProps> = ({ menuItems }) => {
    const classList = classNames(styles['header']);

    return (
        <>
            <Section as='header' className={classList}>
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
            </Section>
            <MobileNav menuItems={menuItems} />
        </>
    );
};

export default Header;
