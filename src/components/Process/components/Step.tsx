import classNames from 'classnames';
import { FC } from 'react';

import styles from './Step.module.scss';

import { Process_Steps } from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';

interface StepProps {
    /** Step number */
    number: number;
    /** Step heading */
    heading?: string | null;
    /** Step content */
    content: Process_Steps['content'];
}

const classList = classNames(
    styles['step'],
    styles[process.env.NEXT_PUBLIC_THEME as string]
);

const Step: FC<StepProps> = ({ number, heading, content }) => (
    <Container as='li' className={classList}>
        <Flex className={styles['step__number']}>{number}</Flex>
        <Container className={styles['step__text']}>
            {heading && <Heading color='blue'>{heading}</Heading>}
            {content && (
                <RichText
                    className={styles['step__content']}
                    richText={content}
                />
            )}
        </Container>
    </Container>
);

export default Step;
