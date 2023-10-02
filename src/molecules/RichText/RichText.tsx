import classNames from 'classnames';
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

const RichText: FC<RichTextProps> = ({ richText, className }) => {
    const classList = classNames(styles['rich-text'], className && className);

    return (
        <Container className={classList}>{parseRichText(richText)}</Container>
    );
};

export default RichText;
