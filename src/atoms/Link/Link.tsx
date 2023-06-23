import classNames from 'classnames';
import { FC } from 'react';

import styles from './Link.module.scss';

import parseUrl from '@/utils/parseUrl';

interface LinkProps {
    /** Link text */
    children: string;
    /** Link href */
    href: string;
}

const Link: FC<LinkProps> = ({
    href: destination,
    children
}) => {

    const classList = classNames(styles['link']);

    const {
        rel = undefined,
        target = undefined,
        href = undefined
    } = parseUrl(destination) || {};

    return (
        <a
            href={href}
            rel={rel}
            target={target}
            className={classList}
        >
            {children}
        </a>
    );
};

export default Link;
