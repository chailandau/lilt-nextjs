import classNames from 'classnames';
import { FC, Fragment } from 'react';

import styles from '../styles/section.module.scss';

import RenderComponents from './RenderComponents';

import { Page_PageSections } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';

interface Sections {
    /** Sections to render */
    sections?: Page_PageSections[];
}

const RenderSections: FC<Sections> = ({ sections }) => {
    if (!sections || !sections.length) {
        return null;
    }
    const renderSection = (section: Page_PageSections) => {
        const isHero =
            section?.blocks && section.blocks[0]?.__typename === 'HeroBlock';
        const shapeClasses = section?.shapes?.map(
            (shape) => styles[`shape__${shape?.shape}__${shape?.location}`]
        );
        const classList = classNames(
            styles['section'],
            section?.enableGrid &&
                section?.gridColor &&
                styles[`section__grid-${section?.gridColor}`],
            isHero && styles['section__hero'],
            section?.enableShapes && styles['section__shapes'],
            section?.enableShapes && shapeClasses,
            styles[process.env.NEXT_PUBLIC_THEME as string]
        );

        return (
            section?.blocks && (
                <Container className={classList}>
                    <RenderComponents components={section?.blocks} />
                </Container>
            )
        );
    };

    return (
        <>
            {sections?.map((section) => (
                <Fragment key={section?.id}>{renderSection(section)}</Fragment>
            ))}
        </>
    );
};

export default RenderSections;
