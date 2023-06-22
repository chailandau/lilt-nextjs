import classNames from 'classnames';
import { FC } from 'react';

import styles from './Flex.module.scss';

import Container, { ContainerProps } from '@/atoms/Container/Container';

const Flex: FC<ContainerProps> = ({
    children,
    as: FlexTag = 'div',
    className,
    onClick
}) => {
    const classList = classNames(styles['flex'], className && className);

    return (
        <Container
            as={FlexTag}
            className={classList}
            onClick={onClick}
        >
            {children}
        </Container>
    );
};

export default Flex;
