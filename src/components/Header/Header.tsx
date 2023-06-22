import classNames from 'classnames';

import MobileNav from './components/MobileNav';
import styles from './Header.module.scss';

import Logo from '@/assets/svg/Logo.svg';
import Flex from '@/atoms/Flex/Flex';
import Image from '@/atoms/Image/Image';

const Header = () => {
    const classList = classNames(styles['header']);

    return (
        <Flex as='header' className={classList}>
            <Image
                className={styles['logo']}
                src={Logo}
                alt='Long Island Laser Tag'
                priority
            />
            <MobileNav />
        </Flex>
    );
};

export default Header;
