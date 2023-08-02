import classNames from 'classnames';

import styles from './MenuToggle.module.scss';

import Container from '@/atoms/Container/Container';
import useStore from '@/store/useStore';

const MenuToggle = () => {
    const { menuOpen, setMenuOpen } = useStore();

    const classList = classNames(
        styles['menu-toggle'],
        menuOpen && styles['open']
    );

    return (
        <Container
            as='button'
            className={classList}
            onClick={() => setMenuOpen(!menuOpen)}
            ariaLabel={'menu toggle'}
        >
            <Container className={styles['menu-toggle-container']}>
                <Container className={styles['menu-toggle-inner']}></Container>
            </Container>
        </Container>
    );
};

export default MenuToggle;
