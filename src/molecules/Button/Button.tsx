import { FC } from 'react';

import styles from './Button.module.scss';

export const buttonColors = ['blue', 'green', 'white'] as const;

interface ButtonProps {
    /** Button color */
    color: typeof buttonColors[number];
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
    const classNames = `${styles['button']} ${styles[color]}`;

    const isLink = link && link.trim() !== '';
    const ButtonTag = isLink ? 'a' : 'button';

    return (
        <ButtonTag
            className={classNames}
            onClick={onClick}
        >
            {children}
        </ButtonTag>
    );
};

export default Button;
