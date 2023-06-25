import classNames from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';

import Link from '@/atoms/Link/Link';

export const buttonColors = ['blue', 'green', 'white'] as const;

export interface ButtonProps {
    /** Button color */
    color?: typeof buttonColors[number];
    /** Button content */
    children: string;
    /** `Button` renders as an `a` tag if supplied */
    link?: string;
    /** `onClick` event */
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    color = 'blue',
    link,
    onClick,
    children
}) => {

    const classList = classNames(styles['button'], styles[color]);

    const isLink = link && link.trim() !== '';

    return (
        isLink ? (
            <Link href={link} className={classList} underline={false}>
                {children}
            </Link>
        ) :
            <button className={classList} onClick={onClick}>
                {children}
            </button>
    );
};

export default Button;
