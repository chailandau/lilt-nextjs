import NextImage, { ImageProps as NextImageProps } from 'next/image';

import type { FC } from 'react';

import Flex from '@/molecules/Flex';
import { getPlaceholder, isSvg } from '@/utils/svgHelpers';

interface InternalImageProps {
    /** `next/image` object  */
    src: Omit<NextImageProps, 'alt'>;
    /** Image alt text */
    alt: string;
    /** Optional CSS class */
    className?: string | undefined;
    /** If true, image will be rounded and have a double border */
    hasBorder?: boolean;
    /** If true, `next/image` will be set to priority (https://nextjs.org/docs/app/api-reference/components/image#priority) */
    priority?: boolean;
}

const InternalImage: FC<InternalImageProps> = ({
    src: nextImage,
    alt,
    priority,
    className
}) => {
    const { src, width, height, blurDataURL } = nextImage;

    const svgImg = isSvg(nextImage.src.toString());

    return (
        <Flex className={className}>
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

export default InternalImage;
