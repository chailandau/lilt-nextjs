import { FC } from 'react';

import Button from '../Button/Button';

import CtaTile from './components/CtaTile';
import styles from './Hero.module.scss';

import { Hero as HeroType } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Flex from '@/molecules/Flex';
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
const Hero: FC<HeroProps> = ({ heading, subheading, content, cta }) => {
    const hasContent = content && content[0]?.children[0]?.text !== '';

    const hasButtons = cta?.type === 'button';

    return (
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
            {hasContent && <RichText richText={content} />}

            {hasButtons
                ? cta?.ctaButtons &&
                  cta.ctaButtons.map((ctaButton) => (
                      <Button
                          key={ctaButton?.id}
                          buttonData={ctaButton?.callToAction || null}
                      />
                  ))
                : cta?.ctaTiles && (
                      <Flex className={styles['cta-tiles']}>
                          {cta.ctaTiles.map((ctaTile) => (
                              <CtaTile
                                  key={ctaTile?.id}
                                  tileData={ctaTile?.callToActionTile || null}
                              />
                          ))}
                      </Flex>
                  )}
        </Section>
    );
};
export default Hero;
