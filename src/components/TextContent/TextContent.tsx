import { FC } from 'react';

import { TextContentBlock_TextContent } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

export interface TextContentProps {
    textContent?: TextContentBlock_TextContent[];
}
const TextContent: FC<TextContentProps> = ({ textContent }) =>
    // const hasContent = content && content[0]?.children[0]?.text !== '';

    // return (
    //     <Section className={styles['hero']}>
    //         {heading && (
    //             <Heading centered as='h1' size='xl'>
    //                 {heading}
    //             </Heading>
    //         )}
    //         {hasContent && <RichText richText={content} />}
    //     </Section>
    // );

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
