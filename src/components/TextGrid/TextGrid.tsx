import { FC } from 'react';

import Button from '../Button/Button';

import TextGridTiles from './components/TextGridTiles';
import styles from './TextGrid.module.scss';

import { TextGrid as TextGridType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

const TextGrid: FC<Omit<TextGridType, 'internalName'>> = ({
    callToAction,
    content,
    heading,
    textTiles
}) => (
    <Section className={styles['text-grid']}>
        <Flex className={styles['text-grid__content']}>
            {heading && <Heading>{heading}</Heading>}
            {content && <RichText richText={content} />}
        </Flex>

        {textTiles && <TextGridTiles textTiles={textTiles} />}
        {callToAction && (
            <Flex className={styles['text-grid__btn']}>
                <Button buttonData={callToAction} />
            </Flex>
        )}
    </Section>
);

export default TextGrid;
