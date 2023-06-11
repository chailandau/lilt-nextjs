import { FC } from 'react';

import styles from './Heading.module.scss';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const headingColors = ['blue', 'green'] as const;

interface HeadingProps {
    /** Semantic tag heading is wrapped in */
    tag: typeof headingTags[number];
    /** Heading size */
    size: typeof headingSizes[number];
    /** Heading color */
    color: typeof headingColors[number];
    /** Heading content */
    children: string;
}

const Heading: FC<HeadingProps> = ({
    tag: HeadingTag = 'h2',
    size = 'md',
    color = 'green',
    children,
}) => {
    const classNames = `
        ${styles['heading']} 
        ${styles[size]} 
        ${styles[color]}
    `;

    return (
        <HeadingTag className={classNames}>
            {children}
        </HeadingTag>
    );
};

export default Heading;
