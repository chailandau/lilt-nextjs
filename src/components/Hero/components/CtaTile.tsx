import { FC } from 'react';

import styles from './CtaTile.module.scss';

import { CtaTile as CtaTileType } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import { getLink } from '@/utils/getLink';

interface CtaTileProps {
    /** Array of CTA tile objects */
    tileData?: CtaTileType | null;
}
const CtaTile: FC<CtaTileProps> = ({ tileData }) => {
    const { icon, externalLink, internalLink, label, linkType } =
        tileData || {};

    const tileLink = getLink({
        linkType,
        externalLink,
        internalLink
    });

    return (
        <Flex className={styles['cta-tile']}>
            <Link
                href={tileLink}
                underlineHover={false}
                className={styles['cta-tile__link']}
            >
                {icon && (
                    <Image
                        src={icon?.url || ''}
                        alt={icon?.alt || ''}
                        width={80}
                        height={80}
                        base64={icon?.base64}
                        hasBorder={false}
                        className={styles['cta-tile__icon']}
                    />
                )}
                {label && <Text size='sm'>{label}</Text>}
            </Link>
        </Flex>
    );
};

export default CtaTile;
