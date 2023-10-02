import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

export const textTags = ['p', 'span'] as const;

interface TextProps {
    /** Semantic tag text is wrapped in */
    as?: (typeof textTags)[number];
    /** Text content */
    children: string | ReactNode;
}

const Text: FC<TextProps> = ({ as: TextTag = 'p', children }) => (
    <TextTag className={styles['text']}>{children}</TextTag>
);

export default Text;
