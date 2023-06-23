import classNames from 'classnames';
import NextLink from 'next/link';
import { FC } from 'react';

import styles from './Link.module.scss';

import parseUrl from '@/utils/parseUrl';

interface LinkProps {
    /** Link text */
    children: string;
    /** Link href */
    href: string;
    /** CSS class name */
    className?: string;
    /** Enables underline on hover */
    underline?: boolean;
}

const Link: FC<LinkProps> = ({
    href: destination,
    children,
    className,
    underline = true
}) => {
    const classList = classNames(underline && styles['underline'], className && className);

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
        >
            {children}
        </NextLink>
    );
};

export default Link;
