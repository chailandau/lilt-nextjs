import { FC } from 'react';

import styles from './Tiles.module.scss';

import { TileGrid } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';

const Tiles: FC<Omit<TileGrid, 'heading'>> = ({ tiles }) => (
    <Container className={styles['tiles']}>
        {tiles &&
            tiles?.length > 0 &&
            tiles?.map((tile) => (
                <Flex key={tile?.id} className={styles['tile']}>
                    {tile?.heading && (
                        <Heading size='xs' color='blue'>
                            {tile?.heading}
                        </Heading>
                    )}
                    {tile?.content && (
                        <RichText
                            className={styles['tile__text']}
                            richText={tile?.content}
                        />
                    )}
                </Flex>
            ))}
    </Container>
);

export default Tiles;
