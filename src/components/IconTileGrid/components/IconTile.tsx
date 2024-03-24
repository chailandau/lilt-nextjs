import classNames from 'classnames';
import { FC } from 'react';

import styles from './IconTile.module.scss';

import { IconTile as IconTileType } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const classList = classNames(
    styles['icon-tile'],
    styles[process.env.NEXT_PUBLIC_THEME as string]
);

const IconTile: FC<IconTileType> = ({ label, icon }) => (
    <Flex className={classList}>
        <Image
            src={icon?.url || ''}
            alt={label}
            className={styles['icon-tile__icon']}
            width={icon?.width || 100}
            height={icon?.height || 100}
            hasBorder={false}
            base64={icon?.base64}
        />
        <Text size='md' className={styles['icon-tile__label']}>
            {label}
        </Text>
    </Flex>
);
export default IconTile;
