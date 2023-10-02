import { FC } from 'react';

import Button from '../Button/Button';

import styles from './Hero.module.scss';

import { Hero as HeroType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import RichText from '@/molecules/RichText';
import Section from '@/molecules/Section';

export interface HeroProps {
    /** Hero heading */
    heading?: string;
    /** Hero subheading */
    subheading?: HeroType['subheading'];
    /** Hero text content */
    content?: HeroType['content'];
    /** Hero CTA */
    cta?: HeroType['cta'];
}
const Hero: FC<HeroProps> = ({ heading, subheading, content, cta }) => (
    <Section className={styles['hero']}>
        {heading && (
            <Heading centered as='h1' size='xl'>
                {heading}
            </Heading>
        )}

        {subheading && (
            <Heading centered size='sm' color='blue'>
                {subheading}
            </Heading>
        )}
        {content && <RichText richText={content} />}

        {cta?.ctaButtons &&
            cta.ctaButtons.map((ctaButton) => (
                <Button
                    key={ctaButton?.id}
                    buttonData={ctaButton?.callToAction || null}
                />
            ))}
        {/* {cta && (
                <Link href={ctaLink} className={styles['cta']}>
                    {cta?.label}
                </Link>
            )} */}
    </Section>
);
export default Hero;
