import { FC } from 'react';

import styles from './TextGridTiles.module.scss';

import { TextGrid } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const TextGridTiles: FC<Omit<TextGrid, 'internalName'>> = ({ textTiles }) => (
    <Container className={styles['text-grid-tiles']}>
        {textTiles &&
            textTiles?.length > 0 &&
            textTiles?.map((textTile) => (
                <Flex key={textTile?.id} className={styles['text-grid-tile']}>
                    {textTile?.text && <Text>{textTile.text}</Text>}
                </Flex>
            ))}
    </Container>
);

export default TextGridTiles;
