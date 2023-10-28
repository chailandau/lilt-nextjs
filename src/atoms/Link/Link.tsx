'use client';

import classNames from 'classnames';
import NextLink from 'next/link';
import { FC, KeyboardEvent, ReactNode } from 'react';

import styles from './Link.module.scss';

import parseUrl from '@/utils/parseUrl';

interface LinkProps {
    /** Link text */
    children: ReactNode;
    /** Link href */
    href: string;
    /** CSS class name */
    className?: string;
    /** Enables underline on hover */
    underlineHover?: boolean;
    /** `onKeyDown` event */
    onKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
    /** `onClick` event */
    onClick?: () => void;
}

const Link: FC<LinkProps> = ({
    href: destination,
    children,
    className,
    underlineHover = true,
    onKeyDown,
    onClick
}) => {
    const classList = classNames(
        styles['link'],
        underlineHover && styles['underline-hover'],
        className && className
    );

    const {
        href = '',
        target = undefined,
        rel = undefined
    } = parseUrl(destination) || {};

    return (
        <NextLink
            className={classList}
            href={href}
            rel={rel}
            target={target}
            onKeyDown={(e) => onKeyDown && onKeyDown(e)}
            onClick={onClick}
        >
            {children}
        </NextLink>
    );
};

export default Link;
