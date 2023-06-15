import { FC } from 'react';

import styles from './Text.module.scss';

export const textTags = ['p', 'span'] as const;

interface TextProps {
    /** Semantic tag text is wrapped in */
    tag?: typeof textTags[number];
    /** Text content */
    children: string;
}

const Text: FC<TextProps> = ({ tag: TextTag = 'p', children }) => (
    <TextTag className={styles.text}>
        {children}
    </TextTag>
);

export default Text;
