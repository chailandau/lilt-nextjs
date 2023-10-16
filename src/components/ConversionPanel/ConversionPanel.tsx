import { FC } from 'react';

import Button from '../Button/Button';

import styles from './ConversionPanel.module.scss';

import {
    CallToAction,
    ConversionPanel as ConversionPanelType
} from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

export interface ConversionPanelProps {
    /** Heading */
    heading?: string;
    /** Rich text content */
    content?: ConversionPanelType['content'];
    /** Call to action */
    callToAction?: CallToAction;
}
const ConversionPanel: FC<ConversionPanelProps> = ({
    heading,
    content,
    callToAction
}) => (
    <Section>
        <Flex className={styles['conversion-panel']}>
            <Flex className={styles['conversion-panel__content']}>
                {heading && <Heading>{heading}</Heading>}
                {content && <RichText richText={content} />}
            </Flex>
            {callToAction && (
                <Flex className={styles['conversion-panel__btn']}>
                    <Button buttonData={callToAction} />
                </Flex>
            )}
        </Flex>
    </Section>
);
export default ConversionPanel;
