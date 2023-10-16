import { FC } from 'react';

import styles from './Feature.module.scss';

import { FeatureTile } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';

export interface FeatureProps {
    /** Feature heading */
    heading?: string | null;
    /** Feature content */
    content?: FeatureTile['content'];
    /** Feature image */
    image?: FeatureTile['image'];
}
const Feature: FC<FeatureProps> = ({ heading, content, image }) => (
    <Flex className={styles['feature']}>
        {image && image?.url && (
            <Image
                src={image.url}
                alt={image?.alt}
                className={styles['feature__image']}
                width={image?.width || 1000}
                height={image?.height || 1000}
                base64={image?.base64}
            />
        )}
        {heading && (
            <Heading size='xs' color='blue'>
                {heading}
            </Heading>
        )}
        {content && <RichText richText={content} />}
    </Flex>
);
export default Feature;
