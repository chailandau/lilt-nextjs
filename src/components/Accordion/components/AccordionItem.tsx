'use client';

import classNames from 'classnames';
import { FC, useState } from 'react';

import styles from './AccordionItem.module.scss';

import { Accordion_AccordionItems } from '@/api/graphqlTypes';
import Caret from '@/assets/svg/Caret.svg';
import LaserTarget from '@/assets/svg/LaserTarget.svg';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';

const AccordionItem: FC<Accordion_AccordionItems> = ({ heading, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };
    const classList = classNames(
        styles['accordion-item'],
        isOpen && styles['expanded']
    );

    const contentClassList = classNames(
        styles['accordion-item__content'],
        isOpen && styles['expanded']
    );

    return (
        <Flex className={classList} onClick={handleClick}>
            {heading && content && (
                <>
                    <button
                        aria-controls={heading}
                        aria-expanded={isOpen}
                        className={styles['accordion-item__header']}
                    >
                        <Heading as='h3' size='xs'>
                            {heading}
                        </Heading>
                        <Image
                            src={isOpen ? Caret : LaserTarget}
                            alt={`${isOpen ? 'Open' : 'Close'} Accordion`}
                            hasBorder={false}
                            className={styles['accordion-item__icon']}
                        />
                    </button>
                    <Container id={heading} className={contentClassList}>
                        <RichText richText={content} />
                    </Container>
                </>
            )}
        </Flex>
    );
};

export default AccordionItem;
