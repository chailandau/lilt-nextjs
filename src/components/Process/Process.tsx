import { FC } from 'react';

import Button from '../Button/Button';

import Step from './components/Step';
import styles from './Process.module.scss';

import { CallToAction, Process_Steps } from '@/api/graphqlTypes';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';

interface ProcessProps {
    /** Process call to action */
    callToAction?: CallToAction | null;
    /** Array of process steps */
    steps?: Process_Steps[] | null;
}

const Process: FC<ProcessProps> = ({ callToAction, steps }) => {
    if (!steps || !steps.length) {
        return null;
    }

    return (
        <Section className={styles['process']}>
            <ol className={styles['process__steps']}>
                {steps?.map((step, index) => (
                    <Step
                        key={step?.id}
                        number={index + 1}
                        heading={step?.heading}
                        content={step?.content}
                    />
                ))}
            </ol>
            {callToAction && (
                <Flex className={styles['process__btn']}>
                    <Button buttonData={callToAction} />
                </Flex>
            )}
        </Section>
    );
};

export default Process;
