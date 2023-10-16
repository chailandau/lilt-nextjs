import { FC } from 'react';

import Button from '../Button/Button';

import IconTile from './components/IconTile';
import styles from './IconTileGrid.module.scss';

import {
    CallToAction,
    IconTileGrid as IconTileGridType,
    IconTile as IconTileType
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

interface IconTileGridProps {
    /** Heading */
    heading?: string;
    /** Rich Text Content */
    content?: IconTileGridType['content'];
    /** Icon Tiles */
    iconTiles?: IconTileType[];
    /** Call To Action */
    callToAction?: CallToAction;
}
const IconTileGrid: FC<IconTileGridProps> = ({
    heading,
    content,
    iconTiles,
    callToAction
}) => (
    <Section className={styles['icon-tile-grid__wrapper']}>
        {heading && <Heading>{heading}</Heading>}
        {content && <RichText richText={content} />}
        <Flex className={styles['icon-tile-grid']}>
            {iconTiles &&
                iconTiles?.map((iconTile) => (
                    <IconTile key={iconTile?.id} {...iconTile} />
                ))}
        </Flex>
        {callToAction && (
            <Flex className={styles['icon-tile-grid__btn']}>
                <Button buttonData={callToAction} />
            </Flex>
        )}
    </Section>
);
export default IconTileGrid;
