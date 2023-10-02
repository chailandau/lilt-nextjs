import { FC } from 'react';

import styles from './Switchback.module.scss';

import { Switchback as SwitchbackType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

export interface SwitchbackProps {
    /** Switchback heading */
    heading?: string | null;
    /** Switchback subheading */
    subheading?: string | null;
    /** Switchback content */
    content?: SwitchbackType['content'];
    /** Switchback image */
    image?: SwitchbackType['image'];
    /** Image side */
    imageSide?: SwitchbackType['imageSide'];
}
const Switchback: FC<SwitchbackProps> = ({
    heading,
    subheading,
    content,
    image,
    imageSide
}) => {
    console.log('image', image);

    return (
        <Section className={styles['switchback']}>
            {image && image?.url && (
                <Image
                    src={image.url}
                    alt={image?.alt}
                    className={styles['image']}
                    width={image?.width || 1000}
                    height={image?.height || 1000}
                />
            )}
            {heading && <Heading>{heading}</Heading>}
            {subheading && (
                <Heading size='sm' color='blue'>
                    {subheading}
                </Heading>
            )}
            {content && <RichText richText={content} />}
        </Section>
    );
};
export default Switchback;
