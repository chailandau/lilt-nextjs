import classNames from 'classnames';
import { FC } from 'react';

import styles from './Flex.module.scss';

import { ContainerProps } from '@/atoms/Container/Container';

type FlexProps = ContainerProps

const Flex: FC<FlexProps> = ({
    children,
    as: FlexTag = 'div',
    className
}) => {
    const classList = classNames(styles.flex, className && className);

    return (
        <FlexTag className={classList}>
            {children}
        </FlexTag>
    );
};

export default Flex;
