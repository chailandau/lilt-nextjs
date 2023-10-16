import { FC } from 'react';

import styles from './IconTile.module.scss';

import { IconTile as IconTileType } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const IconTile: FC<IconTileType> = ({ label, icon }) => (
    <Flex className={styles['icon-tile']}>
        <Image
            src={icon?.url || ''}
            alt={label}
            className={styles['icon-tile__icon']}
            width={icon?.width || 100}
            height={icon?.height || 100}
            hasBorder={false}
        />
        <Text size='md' className={styles['icon-tile__label']}>
            {label}
        </Text>
    </Flex>
);
export default IconTile;
