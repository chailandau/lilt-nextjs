import classNames from 'classnames';

import MenuToggle from './components/MenuToggle';
import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import Logo from '@/assets/svg/Logo.svg';
import Image from '@/atoms/Image/Image';
import Section from '@/molecules/Section/Section';

const Header = () => {
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
                <MenuToggle />
            </Section>
            <MobileNav />
        </>
    );
};

export default Header;
