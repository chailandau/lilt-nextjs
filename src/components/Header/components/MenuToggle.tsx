import classNames from 'classnames';
import { useState } from 'react';

import styles from './MenuToggle.module.scss';

import Container from '@/atoms/Container/Container';

const MenuToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const classList = classNames(styles['menu-toggle'], menuOpen && styles['open']);

    return (
        <Container
            as='button'
            className={classList}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <Container className={styles['menu-toggle-container']}>
                <Container className={styles['menu-toggle-inner']}></Container>
            </Container>
        </Container>
    );
};

export default MenuToggle;
