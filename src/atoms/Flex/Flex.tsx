import { FC, ReactNode } from 'react';

import styles from './Flex.module.scss';

import { semanticTags } from '@/atoms/Container/Container';

interface FlexProps {
    /** Section content */
    children: ReactNode;
    /** Semantic tag */
    as?: typeof semanticTags[number];
}

const Flex: FC<FlexProps> = ({
    children,
    as: FlexTag = 'div',
}) => (
    <FlexTag className={styles.flex}>
        {children}
    </FlexTag>
);

export default Flex;
