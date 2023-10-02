import classNames from 'classnames';
import { FC } from 'react';

import styles from './Flex.module.scss';

import Container, { ContainerProps } from '@/atoms/Container';

const Flex: FC<ContainerProps> = ({
    children,
    as: FlexTag = 'div',
    className
}) => {
    const classList = classNames(styles['flex'], className && className);

    return (
        <Container as={FlexTag} className={classList}>
            {children}
        </Container>
    );
};

export default Flex;
