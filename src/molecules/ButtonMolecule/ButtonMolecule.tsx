'use client';

import classNames from 'classnames';
import { FC, KeyboardEvent, ReactNode } from 'react';

import styles from './ButtonMolecule.module.scss';

import Link from '@/atoms/Link';

export const buttonMoleculeVariants = [
    'blue',
    'green',
    'white',
    'link'
] as const;

export type ButtonMoleculeVariant = (typeof buttonMoleculeVariants)[number];

export interface ButtonMoleculeProps {
    /** Button variant */
    variant?: ButtonMoleculeVariant;
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

const ButtonMolecule: FC<ButtonMoleculeProps> = ({
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
        className && className,
        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    const isLink = link && link.trim() !== '';

    return isLink ? (
        <Link
            href={link}
            className={classList}
            underlineHover={false}
            onClick={onClick}
        >
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

export default ButtonMolecule;
