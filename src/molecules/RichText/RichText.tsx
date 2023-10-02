import { FC } from 'react';

import styles from './RichText.module.scss';

import Container from '@/atoms/Container';
import {
    RichTextProps as RichTextPropsType,
    parseRichText
} from '@/utils/parseRichText';

interface RichTextProps {
    /** Colored subhead to display */
    richText: RichTextPropsType[];
    /** optional class name */
    className?: string;
}

const RichText: FC<RichTextProps> = ({ richText }) => (
    <Container className={styles['rich-text']}>
        {parseRichText(richText)}
    </Container>
);

export default RichText;
