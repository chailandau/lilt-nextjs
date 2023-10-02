import classNames from 'classnames';
import { FC } from 'react';

import styles from './Section.module.scss';

import { ContainerProps } from '@/atoms/Container';
import Flex from '@/molecules/Flex';

const Section: FC<ContainerProps> = ({
    children,
    as: SectionTag = 'section',
    className
}) => {
    const classList = classNames(styles['section'], className && className);

    return (
        <Flex as={SectionTag} className={classList}>
            {children}
        </Flex>
    );
};

export default Section;
