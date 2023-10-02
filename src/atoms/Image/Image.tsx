import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import Flex from '../../molecules/Flex';

import styles from './Image.module.scss';

import { getPlaceholder, isSvg } from '@/utils/functions';

interface ImageProps {
    /** `next/image` object  */
    src: Omit<NextImageProps, 'alt'>;
    /** Image alt text */
    alt: string;
    /** CSS class */
    className?: string | undefined;
    /** If true, image will be rounded and have a double border */
    hasBorder?: boolean;
    /** If true, `next/image` will be set to priority (https://nextjs.org/docs/app/api-reference/components/image#priority) */
    priority?: boolean;
}

const Image: FC<ImageProps> = ({
    src: nextImage,
    alt,
    className,
    hasBorder,
    priority
}) => {
    const { src, width, height, blurDataURL } = nextImage;

    const classList = classNames(
        styles['container'],
        hasBorder && styles['border'],
        className && className
    );

    const svgImg = isSvg(nextImage.src.toString());

    return (
        <Flex className={classList}>
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                placeholder={getPlaceholder(svgImg)}
                blurDataURL={blurDataURL}
            />
        </Flex>
    );
};

export default Image;
