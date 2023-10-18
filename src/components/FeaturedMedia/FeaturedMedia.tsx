import { FC } from 'react';

import Button from '../Button/Button';

import styles from './FeaturedMedia.module.scss';

import { FeaturedMedia as FeaturedMediaType } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';
import VideoPlayer from '@/molecules/VideoPlayer';

interface FeaturedMediaProps extends Omit<FeaturedMediaType, 'heading'> {
    heading?: string;
}

const FeaturedMedia: FC<FeaturedMediaProps> = ({
    heading,
    content,
    assetType,
    image,
    video,
    callToAction
}) => {
    const isImage = assetType === 'image';

    return (
        <Section className={styles['featured-media__wrapper']}>
            <Flex className={styles['featured-media']}>
                <Flex className={styles['featured-media__content']}>
                    {heading && <Heading size='xl'>{heading}</Heading>}
                    {content && <RichText richText={content} />}
                </Flex>
                <Container className={styles['featured-media__media']}>
                    {isImage
                        ? image &&
                          image?.url && (
                              <Image
                                  src={image.url}
                                  alt={image?.alt}
                                  className={styles['image']}
                                  width={image?.width || 1000}
                                  height={image?.height || 1000}
                                  base64={image?.base64}
                              />
                          )
                        : video && (
                              <VideoPlayer
                                  url={video?.url}
                                  placeholder={video?.placeholderImage}
                              />
                          )}
                </Container>
                {callToAction && (
                    <Flex className={styles['featured-media__btn']}>
                        <Button buttonData={callToAction} />
                    </Flex>
                )}
            </Flex>
        </Section>
    );
};
export default FeaturedMedia;
