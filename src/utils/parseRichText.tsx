import { Fragment, JSX } from 'react';

import Link from '@/atoms/Link';
import Text from '@/atoms/Text';

interface ChildSegment {
    strikethrough: boolean;
    underline: boolean;
    italic: boolean;
    bold: boolean;
    children?: ChildSegment[];
    text?: string;
    url?: string | null | undefined;
    newTab?: boolean;
    type?: 'link' | 'ul' | 'ol';
}

export interface RichTextProps {
    text: string;
    url?: string | null | undefined;
    newTab?: boolean;
    type?: 'ul' | 'ol';
    children: ChildSegment[];
}

type RichText = JSX.Element[] | null | undefined;

const formatText = (
    text: string,
    format: string,
    index: number
): JSX.Element => {
    switch (format) {
        case 'bold':
            return <b key={index}>{text}</b>;
        case 'italic':
            return <i key={index}>{text}</i>;
        case 'underline':
            return <u key={index}>{text}</u>;
        case 'strikethrough':
            return <s key={index}>{text}</s>;
        default:
            return <Fragment key={index}>{text}</Fragment>;
    }
};

const processText = (child: ChildSegment, index: number): JSX.Element => {
    if (child.text) {
        if (child.bold) {
            return formatText(child.text, 'bold', index);
        }
        if (child.italic) {
            return formatText(child.text, 'italic', index);
        }
        if (child.underline) {
            return formatText(child.text, 'underline', index);
        }
        if (child.strikethrough) {
            return formatText(child.text, 'strikethrough', index);
        }

        return formatText(child.text, '', index);
    }

    return <Fragment key={index}></Fragment>;
};

const processLink = (
    child: ChildSegment,
    index: number
): JSX.Element | null => {
    if (child.type === 'link' && child.url && child.children?.[0]?.text) {
        return (
            <Link key={index} href={child.url}>
                {child.children[0].text}
            </Link>
        );
    }

    return null;
};

const processList = (child: RichTextProps): JSX.Element | null => {
    if (child?.type === 'ul' || child?.type === 'ol') {
        const listItems = child?.children.map(
            (item) =>
                item?.children?.map((listItem, listItemIndex) => (
                    <li key={listItemIndex}>
                        {processText(listItem, listItemIndex)}
                    </li>
                ))
        );

        if (listItems?.length) {
            return child?.type === 'ul' ? (
                <ul>{listItems}</ul>
            ) : (
                <ol>{listItems}</ol>
            );
        }
    }

    return null;
};

export const parseRichText = (richText: RichTextProps[]): RichText | null => {
    if (!richText) {
        return null;
    }

    const results: JSX.Element[] = [];

    richText.forEach((segment, index) => {
        const content: JSX.Element[] = [];

        const list = processList(segment);
        if (list) {
            results.push(list);
        }

        segment?.children?.forEach((child, segmentIndex) => {
            if (child.text) {
                content.push(processText(child, segmentIndex));
            }

            const link = processLink(child, segmentIndex);
            if (link) {
                content.push(link);
            }
        });

        if (content.length > 0) {
            results.push(<Text key={index}>{content}</Text>);
        } else if (segment.text) {
            results.push(<Text key={index}>{segment.text}</Text>);
        }
    });

    return results.length > 0 ? results : null;
};
