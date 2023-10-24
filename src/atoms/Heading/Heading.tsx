import classNames from 'classnames';
import { FC } from 'react';

import styles from './Heading.module.scss';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;

export const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const headingColors = ['blue', 'green'] as const;

interface HeadingProps {
    /** Semantic tag heading is wrapped in */
    as?: (typeof headingTags)[number];
    /** Heading size */
    size?: (typeof headingSizes)[number];
    /** Heading color */
    color?: (typeof headingColors)[number];
    /** Heading content */
    children: string;
    /** If true, heading will be centered */
    centered?: boolean;
}

const Heading: FC<HeadingProps> = ({
    as: HeadingTag = 'h2',
    size = 'md',
    color = 'green',
    centered,
    children
}) => {
    const classList = classNames(
        styles['heading'],
        styles[size],
        styles[color],
        centered && styles['centered']
    );

    return <HeadingTag className={classList}>{children}</HeadingTag>;
};

export default Heading;
