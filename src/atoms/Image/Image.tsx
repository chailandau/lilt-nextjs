import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import Container from '../Container/Container';

import styles from './Image.module.scss';

interface ImageProps {
    /** `next/image` object  */
    src: NextImageProps;
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
    const { src } = nextImage;

    const classList = classNames(styles['container'], hasBorder && styles['border']);

    return (
        <Container className={classList}>
            <NextImage
                src={src}
                alt={alt}
                priority={priority}
                fill
            />
        </Container >
    );
};

export default Image;
