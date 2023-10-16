import NextImage from 'next/image';

import type { FC } from 'react';

import { ImageProps } from '../Image';

import Flex from '@/molecules/Flex';

interface ExternalImageProps extends Omit<ImageProps, 'src'> {
    src: string;
}

const ExternalImage: FC<ExternalImageProps> = ({
    src,
    alt,
    className,
    width,
    height,
    priority,
    base64
}) => (
    <Flex className={className}>
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            placeholder={base64 ? 'blur' : 'empty'}
            blurDataURL={base64 ? base64 : ''}
        />
    </Flex>
);

export default ExternalImage;
