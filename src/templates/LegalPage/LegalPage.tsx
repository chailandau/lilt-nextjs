import { FC } from 'react';

import styles from './LegalPage.module.scss';

import { LegalPage_LegalBlocks } from '@/api/graphqlTypes';
import Text from '@/atoms/Text';
import Hero from '@/components/Hero';
import Section from '@/molecules/Section';
import { formatDate } from '@/utils/formatDate';
import RenderComponents from '@/utils/RenderComponents';

interface LegalPageProps {
    /** Legal page title */
    title?: string | null;
    /** Legal page blocks */
    blocks?: LegalPage_LegalBlocks[];
    /** Last updated date */
    updatedAt?: string;
}

const LegalPage: FC<LegalPageProps> = ({ title, blocks, updatedAt }) => (
    <Section as='div' className={styles['legal-page']}>
        {title && <Hero heading={title} />}
        {updatedAt && (
            <Text className={styles['last-updated']}>
                Last updated: {formatDate(updatedAt)}
            </Text>
        )}
        {blocks && <RenderComponents components={blocks} />}
    </Section>
);

export default LegalPage;
