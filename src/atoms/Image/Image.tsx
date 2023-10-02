import classNames from 'classnames';
import { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import ExternalImage from './components/ExternalImage';
import InternalImage from './components/InternalImage';
import styles from './Image.module.scss';

export interface ImageProps {
    /** `next/image` object  */
    src: Omit<NextImageProps, 'alt'> | string;
    /** Image alt text */
    alt: string;
    /** CSS class */
    className?: string | undefined;
    /** Image width */
    width?: number;
    /** Image height */
    height?: number;
    /** If true, image will be rounded and have a double border */
    hasBorder?: boolean;
    /** If true, `next/image` will be set to priority (https://nextjs.org/docs/app/api-reference/components/image#priority) */
    priority?: boolean;
}

const Image: FC<ImageProps> = ({
    src,
    alt,
    className,
    width,
    height,
    hasBorder = true,
    priority
}) => {
    const classList = classNames(
        styles['container'],
        hasBorder && styles['border'],
        className && className
    );

    const imageProps = {
        alt,
        hasBorder,
        priority,
        className: classList
    };

    if (typeof src === 'string') {
        return (
            <ExternalImage
                src={src}
                width={width}
                height={height}
                {...imageProps}
            />
        );
    }

    return <InternalImage src={src} {...imageProps} />;
};

export default Image;
