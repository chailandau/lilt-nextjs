import classNames from 'classnames';
import { FC, KeyboardEvent, ReactNode } from 'react';

import styles from './Button.module.scss';

import Link from '@/atoms/Link/Link';

export const buttonVariants = ['blue', 'green', 'white', 'link'] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export interface ButtonProps {
    /** Button variant */
    variant?: ButtonVariant;
    /** Button content */
    children: ReactNode;
    /** `Button` renders as an `a` tag if supplied */
    link?: string;
    /** `onClick` event */
    onClick?: () => void;
    /** `onKeyDown` event */
    onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
    /** CSS `className` */
    className?: string;
}

const Button: FC<ButtonProps> = ({
    variant = 'blue',
    link,
    onClick,
    onKeyDown,
    children,
    className
}) => {
    const classList = classNames(
        styles['button'],
        styles[variant],
        className && className
    );

    const isLink = link && link.trim() !== '';

    return isLink ? (
        <Link href={link} className={classList} underline={false}>
            {children}
        </Link>
    ) : (
        <button
            className={classList}
            onClick={onClick}
            onKeyDown={(e) => onKeyDown && onKeyDown(e)}
        >
            {children}
        </button>
    );
};

export default Button;
