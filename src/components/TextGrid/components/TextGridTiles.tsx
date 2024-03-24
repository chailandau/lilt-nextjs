import classNames from 'classnames';
import { FC } from 'react';

import styles from './TextGridTiles.module.scss';

import { TextGrid } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const classList = classNames(
    styles['text-grid-tiles'],
    styles[process.env.NEXT_PUBLIC_THEME as string]
);

const TextGridTiles: FC<Omit<TextGrid, 'internalName'>> = ({ textTiles }) => (
    <Container className={classList}>
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
