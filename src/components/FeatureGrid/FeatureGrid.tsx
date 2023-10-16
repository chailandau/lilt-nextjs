import { FC } from 'react';

import Feature from './components/Feature';
import styles from './FeatureGrid.module.scss';

import { FeatureTile } from '@/api/graphqlTypes';
import Section from '@/molecules/Section';

interface FeatureGridProps {
    featureTiles?: FeatureTile[];
}

const FeatureGrid: FC<FeatureGridProps> = ({ featureTiles }) => (
    <Section className={styles['feature-grid']}>
        {featureTiles &&
            featureTiles?.map((featureTile) => (
                <Feature key={featureTile?.id} {...featureTile} />
            ))}
    </Section>
);

export default FeatureGrid;
