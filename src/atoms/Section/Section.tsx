import { FC, ReactNode } from 'react';

import styles from './Section.module.scss';

interface SectionProps {
    /** Section content */
    children: ReactNode;
}

const Section: FC<SectionProps> = ({
    children,
}) => (
    <div className={styles.section}>
        {children}
    </div>
);

export default Section;
