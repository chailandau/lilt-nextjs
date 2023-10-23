import { FC } from 'react';

import styles from './Accordion.module.scss';
import AccordionItem from './components/AccordionItem';

import { Accordion as AccordionType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Section from '@/molecules/Section';

interface AccordionProps extends Omit<AccordionType, 'heading'> {
    /** Accordion heading */
    heading?: string;
}

const Accordion: FC<AccordionProps> = ({ heading, accordionItems }) => (
    <Section className={styles['accordion']}>
        {heading && <Heading>{heading}</Heading>}
        {accordionItems &&
            accordionItems?.map((item) => (
                <AccordionItem
                    key={item?.id}
                    heading={item?.heading}
                    content={item?.content}
                />
            ))}
    </Section>
);

export default Accordion;
