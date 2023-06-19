import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import Container from '../Container/Container';

interface ImageProps {
    src: NextImageProps;
    alt: string;
}

const Image: FC<ImageProps> = ({
    src: nextImage,
    alt
}) => {
    const { height, src, width } = nextImage;

    return (
        <Container className='image'>
            <NextImage src={src} width={width} height={height} alt={alt} />
        </Container >
    );
};

export default Image;
