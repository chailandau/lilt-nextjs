import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

export const textTags = ['p', 'span'] as const;

export const textSizes = ['xs', 'sm', 'md', 'lg'] as const;

interface TextProps {
    /** Semantic tag text is wrapped in */
    as?: (typeof textTags)[number];
    /** Text content */
    children: string | ReactNode;
    /** Text size */
    size?: (typeof textSizes)[number];
    /** Optional classname */
    className?: string;
}

const Text: FC<TextProps> = ({
    as: TextTag = 'p',
    children,
    size = 'md',
    className
}) => {
    const classList = classNames(
        styles['text'],
        styles[size],
        className && className
    );

    return <TextTag className={classList}>{children}</TextTag>;
};

export default Text;
