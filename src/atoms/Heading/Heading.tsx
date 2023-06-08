import { FC } from 'react';

import styles from './Heading.module.scss';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

interface HeadingProps {
    /** Semantic heading tag */
    tag: typeof headingTags[number];
    /** Heading size */
    size: typeof headingSizes[number];
    /** Children to wrap in heading tag */
    children: string;
}

const Heading: FC<HeadingProps> = ({
    tag: SemanticTag = 'h2',
    size = 'md',
    children
}) => (
    <SemanticTag className={`${styles[size]} ${styles.heading}`}>
        {children}
    </SemanticTag>
);

export default Heading;
