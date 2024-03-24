import classNames from 'classnames';
import { FC } from 'react';

import Button from '../Button/Button';

import styles from './Switchback.module.scss';

import { Switchback as SwitchbackType } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';
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
    /** Switchback call to action */
    callToAction?: SwitchbackType['callToAction'];
}
const Switchback: FC<SwitchbackProps> = ({
    heading,
    subheading,
    content,
    image,
    imageSide = 'left',
    callToAction
}) => {
    const classList = classNames(
        styles['switchback'],
        styles[`image-${imageSide}`],
        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    return (
        <Section>
            <Container className={classList}>
                <Container className={styles['left-image']}>
                    {image && image?.url && (
                        <Image
                            src={image.url}
                            alt={image?.alt}
                            className={styles['image']}
                            width={image?.width || 1000}
                            height={image?.height || 1000}
                            base64={image?.base64}
                        />
                    )}
                </Container>
                <Flex className={styles['content']}>
                    {heading && <Heading>{heading}</Heading>}
                    {subheading && (
                        <Heading size='sm' color='blue'>
                            {subheading}
                        </Heading>
                    )}
                    {content && (
                        <RichText
                            richText={content}
                            className={styles['content']}
                        />
                    )}
                    {callToAction && (
                        <Flex className={styles['switchback__btn']}>
                            <Button buttonData={callToAction} />
                        </Flex>
                    )}
                </Flex>

                <Container className={styles['right-image']}>
                    {image && image?.url && (
                        <Image
                            src={image.url}
                            alt={image?.alt}
                            className={styles['image']}
                            width={image?.width || 1000}
                            height={image?.height || 1000}
                            base64={image?.base64}
                        />
                    )}
                </Container>
            </Container>
        </Section>
    );
};
export default Switchback;
