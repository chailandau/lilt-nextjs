import { FC } from 'react';

import { TextContentBlock_TextContent } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

export interface TextContentProps {
    textContent?: TextContentBlock_TextContent[];
}
const TextContent: FC<TextContentProps> = ({ textContent }) =>
    textContent &&
    textContent?.map((text) => (
        <Section key={text?.id}>
            {text?.heading && (
                <Heading size='xs' color='blue'>
                    {text?.heading}
                </Heading>
            )}
            {text?.content && <RichText richText={text?.content} />}
        </Section>
    ));
export default TextContent;
