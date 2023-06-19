import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Container.module.scss';

export const semanticTags = ['div', 'footer', 'header', 'nav', 'section'] as const;

interface ContainerProps {
    /** Section content */
    children: ReactNode;
    /** Semantic tag */
    as?: typeof semanticTags[number];
    /** CSS class */
    className?: string;
}

const Container: FC<ContainerProps> = ({
    children,
    as: ContainerTag = 'div',
    className
}) => {
    const classes = classNames(styles['container'], className && styles[className]);

    return (
        <ContainerTag className={classes}>
            {children}
        </ContainerTag>
    );
};

export default Container;
