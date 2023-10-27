import { FC } from 'react';

import Tiles from './components/Tiles';
import styles from './TileGrid.module.scss';

import { TileGrid as TileGridType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

const TileGrid: FC<TileGridType> = ({ heading, content, tiles }) => (
    <Section className={styles['tile-grid']}>
        <Flex className={styles['tile-grid__content']}>
            {heading && <Heading>{heading}</Heading>}
            {content && <RichText richText={content} />}
        </Flex>
        {tiles && <Tiles tiles={tiles} />}
    </Section>
);

export default TileGrid;
