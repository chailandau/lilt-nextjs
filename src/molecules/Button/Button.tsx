import classNames from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';

import Link from '@/atoms/Link/Link';

export const buttonVariants = ['blue', 'green', 'white', 'link'] as const;

export interface ButtonProps {
    /** Button variant */
    variant?: (typeof buttonVariants)[number];
    /** Button content */
    children: string;
    /** `Button` renders as an `a` tag if supplied */
    link?: string;
    /** `onClick` event */
    onClick?: () => void;
    /** `onMouseEnter` event */
    onMouseEnter?: () => void;
    /** `onMouseLeave` event */
    onMouseLeave?: () => void;
    /** CSS `className` */
    className?: string;
}

const Button: FC<ButtonProps> = ({
    variant = 'blue',
    link,
    onClick,
    onMouseEnter,
    onMouseLeave,
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </button>
    );
};

export default Button;
