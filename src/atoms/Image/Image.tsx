import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import Flex from '../Flex/Flex';

import styles from './Image.module.scss';

import { isSvg } from '@/utils/functions';

interface ImageProps {
    /** `next/image` object  */
    src: Omit<NextImageProps, 'alt'>;
    /** Image alt text */
    alt: string;
    /** If true, image will be rounded and have a double border */
    hasBorder?: boolean;
    /** If true, `next/image` will be set to priority (https://nextjs.org/docs/app/api-reference/components/image#priority) */
    priority?: boolean;
}

const Image: FC<ImageProps> = ({
    src: nextImage,
    alt,
    hasBorder,
    priority
}) => {
    const { src, width, height, blurDataURL } = nextImage;

    const classList = classNames(styles['container'], hasBorder && styles['border']);

    const svgImg = isSvg(nextImage.src.toString());

    return (
        <Flex className={classList}>
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                placeholder={svgImg ? undefined : 'blur'}
                blurDataURL={svgImg ? undefined : blurDataURL}
            />
        </Flex >
    );
};

export default Image;
