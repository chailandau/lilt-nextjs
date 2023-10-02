import { JSX } from 'react';

import Link from '@/atoms/Link';
import Text from '@/atoms/Text';

interface ChildSegment {
    underline: boolean;
    italic: boolean;
    bold: boolean;
    children?: ChildSegment[];
    text?: string;
    url?: string | null | undefined;
    newTab?: boolean;
    type?: 'link';
}

export interface RichTextProps {
    url?: string | null | undefined;
    newTab?: boolean;
    type?: 'ul' | 'ol';
    children: ChildSegment[];
}

type RichText = JSX.Element[] | null | undefined;

export const parseRichText = (richText: RichTextProps[]): RichText | null => {
    if (!richText) {
        return null;
    }

    const results: JSX.Element[] = [];
    let currentParagraph: JSX.Element | null = null;

    richText.forEach((segment, index) => {
        const listItems: JSX.Element[] = [];

        segment?.children?.forEach((child) => {
            if (child.type === 'link' && child.url) {
                if (child.children && child.children.length > 0) {
                    const linkText = child.children[0].text;

                    if (currentParagraph) {
                        currentParagraph = (
                            <Text key={`text-link-${child.url}`}>
                                {currentParagraph.props.children}
                                <Link
                                    key={`text-link-${child.url}`}
                                    href={child.url}
                                >
                                    {linkText}
                                </Link>
                            </Text>
                        );
                    } else {
                        currentParagraph = (
                            <Link
                                key={`text-link-${child.url}`}
                                href={child.url}
                            >
                                {linkText}
                            </Link>
                        );
                    }
                }
            } else if (child.bold) {
                if (currentParagraph) {
                    currentParagraph = (
                        <Text key={`text-link-${child.url}`}>
                            {currentParagraph.props.children}
                            <b>{child.text}</b>
                        </Text>
                    );
                } else {
                    currentParagraph = <b>{child.text}</b>;
                }
            } else if (child.underline) {
                if (currentParagraph) {
                    currentParagraph = (
                        <Text key={`text-link-${child.url}`}>
                            {currentParagraph.props.children}
                            <u>{child.text}</u>
                        </Text>
                    );
                } else {
                    currentParagraph = <u>{child.text}</u>;
                }
            } else if (child.italic) {
                if (currentParagraph) {
                    currentParagraph = (
                        <Text key={`text-link-${child.url}`}>
                            {currentParagraph.props.children}
                            <i>{child.text}</i>
                        </Text>
                    );
                } else {
                    currentParagraph = <i>{child.text}</i>;
                }
            } else if (child.text) {
                const paragraphs = child.text
                    .split('\n')
                    .filter((paragraph) => paragraph.trim() !== '');

                if (paragraphs) {
                    paragraphs.forEach((par, parIndex) => {
                        if (currentParagraph) {
                            currentParagraph = (
                                <Text key={`par-${parIndex}`}>
                                    {currentParagraph.props.children}
                                    {par}
                                </Text>
                            );
                        } else {
                            currentParagraph = (
                                <Text key={`par-${parIndex}`}>{par}</Text>
                            );
                        }
                    });
                }
            }

            switch (segment.type) {
                case 'ul':
                case 'ol':
                    child.children?.forEach((listItem) => {
                        listItem.text &&
                            listItems.push(
                                <li key={listItem.text}>
                                    <Text key={listItem.text} as='span'>
                                        {listItem.text}
                                    </Text>
                                </li>
                            );
                    });
                    break;
            }
        });

        if (currentParagraph) {
            results.push(currentParagraph);
            currentParagraph = null;
        }

        if (listItems.length > 0) {
            if (segment.type === 'ul') {
                results.push(<ul key={`ul-${index}`}>{listItems}</ul>);
            }
            if (segment.type === 'ol') {
                results.push(<ol key={`ol-${index}`}>{listItems}</ol>);
            }
        }
    });

    return results;
};
