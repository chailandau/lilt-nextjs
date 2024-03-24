import classNames from 'classnames';

import sectionStyles from '../../styles/section.module.scss';

import styles from './404.module.scss';

import GolfBall from '@/assets/svg/lilg/GolfBall.svg';
import LaserTarget from '@/assets/svg/lilt/LaserTarget.svg';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Button from '@/components/Button/Button';
import Section from '@/molecules/Section';

const classList = classNames(
    styles['not-found'],
    sectionStyles['section__grid-purple'],
    sectionStyles[process.env.NEXT_PUBLIC_THEME as string]
);

const isGreenTheme = process.env.NEXT_PUBLIC_THEME === 'green-theme';

const icon = isGreenTheme ? GolfBall : LaserTarget;

const alt = isGreenTheme ? 'Golf ball' : 'Laser tag target';

const message = isGreenTheme
    ? "Looks like you've wandered off course"
    : 'Target not found';

const buttonLabel = isGreenTheme ? 'Restart course' : 'Return to base';

const NotFound = () => (
    <Section className={classList}>
        <Image
            src={icon}
            alt={alt}
            hasBorder={false}
            className={styles['not-found__image']}
        />
        <Heading size='xl' color={isGreenTheme ? 'blue' : 'green'}>
            {message}
        </Heading>
        <Heading color={isGreenTheme ? 'green' : 'blue'} size='sm' as='p'>
            Page not found
        </Heading>
        <Button
            buttonData={{
                color: 'white',
                linkType: 'internal',
                internalLink: { slug: 'home' },
                label: buttonLabel
            }}
        />
    </Section>
);

export default NotFound;
