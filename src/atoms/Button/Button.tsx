import classNames from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';

import parseUrl from '@/utils/parseUrl';

export const buttonColors = ['blue', 'green', 'white'] as const;

interface ButtonProps {
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

    const classes = classNames(styles['button'], styles[color]);

    const isLink = link && link.trim() !== '';

    const {
        rel = undefined,
        target = undefined,
        href = undefined
    } = (isLink && parseUrl(link)) || {};

    const ButtonTag = isLink ? 'a' : 'button';

    return (
        <ButtonTag
            href={isLink ? href : undefined}
            rel={rel}
            target={target}
            className={classes}
            onClick={onClick}
        >
            {children}
        </ButtonTag>
    );
};

export default Button;
