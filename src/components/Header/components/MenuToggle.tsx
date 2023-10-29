import classNames from 'classnames';

import styles from './MenuToggle.module.scss';

import Container from '@/atoms/Container';
import useStore from '@/store/useStore';

const MenuToggle = () => {
    const { menuOpen, setMenuOpen, setOpenSubmenu } = useStore();

    const handleClick = () => {
        setMenuOpen(!menuOpen);
        setOpenSubmenu(null);
    };

    const classList = classNames(
        styles['menu-toggle'],
        menuOpen && styles['open']
    );

    return (
        <Container
            as='button'
            className={classList}
            onClick={handleClick}
            ariaLabel={'menu toggle'}
        >
            <Container className={styles['menu-toggle-container']}>
                <Container className={styles['menu-toggle-inner']}></Container>
            </Container>
        </Container>
    );
};

export default MenuToggle;
