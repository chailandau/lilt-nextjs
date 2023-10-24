import { FC } from 'react';

import Button from '../Button/Button';
import TextGridTiles from '../TextGrid/components/TextGridTiles';

import styles from './Special.module.scss';

import { Special as SpecialType, TextGrid } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

interface SpecialProps {
    /** Rich text */
    content?: SpecialType['content'];
    /** Special heading */
    heading?: string;
    /** Side box content */
    sideBox?: SpecialType['sideBox'];
    /** Special subheading */
    subheading?: string;
    /** Text grid content */
    textGrid?: TextGrid;
}

const Special: FC<SpecialProps> = ({
    content,
    heading,
    sideBox,
    subheading,
    textGrid
}) => (
    <Section className={styles['special__wrapper']}>
        <Container className={styles['special']}>
            <Flex className={styles['special__content']}>
                {heading && <Heading size='lg'>{heading}</Heading>}
                {subheading && (
                    <Heading as='p' color='blue'>
                        {subheading}
                    </Heading>
                )}
                {content && (
                    <RichText
                        className={styles['special__content-text']}
                        richText={content}
                    />
                )}
            </Flex>
            <Flex className={styles['special__side-box']}>
                {sideBox && <RichText richText={sideBox} />}
            </Flex>
        </Container>

        <Flex className={styles['special__text-grid']}>
            {textGrid && <TextGridTiles textTiles={textGrid?.textTiles} />}
            {textGrid?.callToAction && (
                <Flex className={styles['special__cta']}>
                    <Button buttonData={textGrid?.callToAction} />
                </Flex>
            )}
        </Flex>
    </Section>
);

export default Special;
