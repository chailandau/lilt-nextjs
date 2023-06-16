import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { CSSProperties, FC } from 'react';

interface ImageProps {
    src: NextImageProps;
    alt: string;
    objectFit?: CSSProperties['objectFit'];
}

const Image: FC<ImageProps> = ({
    src: nextImage,
    alt,
    objectFit = 'contain'
}) => {
    const { height, src, width } = nextImage;

    return (
        <div
            style={{ width: 'fit-content', height: 'fit-content' }}
        >
            <NextImage
                src={src}
                width={width}
                height={height}
                alt={alt}
                style={{ objectFit }}
            />
        </div>
    );
};

export default Image;
