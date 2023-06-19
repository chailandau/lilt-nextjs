import classNames from 'classnames';
import { FC } from 'react';

import styles from './Heading.module.scss';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const headingColors = ['blue', 'green'] as const;

interface HeadingProps {
    /** Semantic tag heading is wrapped in */
    as?: typeof headingTags[number];
    /** Heading size */
    size?: typeof headingSizes[number];
    /** Heading color */
    color?: typeof headingColors[number];
    /** Heading content */
    children: string;
}

const Heading: FC<HeadingProps> = ({
    as: HeadingTag = 'h2',
    size = 'md',
    color = 'green',
    children,
}) => {

    const classes = classNames(styles['heading'], styles[size], styles[color]);

    return (
        <HeadingTag className={classes}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
