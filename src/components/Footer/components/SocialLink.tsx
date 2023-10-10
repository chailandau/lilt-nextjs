import { FC } from 'react';

import styles from './SocialLink.module.scss';

import { Footer_SocialLinks } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';

export interface SocialLinkProps {
    /* Menu items to display */
    socialLink?: Footer_SocialLinks;
}
const SocialLink: FC<SocialLinkProps> = ({ socialLink }) => (
    <Link href={socialLink?.url || ''} className={styles['social-link']}>
        <Image
            src={socialLink?.icon?.url || ''}
            alt={socialLink?.icon?.alt || ''}
            width={socialLink?.icon?.width || 20}
            height={socialLink?.icon?.height || 20}
            hasBorder={false}
        />
    </Link>
);

export default SocialLink;
