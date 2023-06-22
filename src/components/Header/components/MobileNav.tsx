import classNames from 'classnames';
import { useState } from 'react';

import styles from './MobileNav.module.scss';

import Container from '@/atoms/Container/Container';

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleClassList = classNames(styles['menu-toggle'], menuOpen && styles['open']);

    return (
        <Container
            as='button'
            className={toggleClassList}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <Container className={styles['menu-toggle-container']}>
                <Container className={styles['menu-toggle-inner']}></Container>
            </Container>
        </Container>
    );
};

export default MobileNav;
