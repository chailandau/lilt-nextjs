import classNames from 'classnames';

import sectionStyles from '../../styles/section.module.scss';

import styles from './404.module.scss';

import LaserTarget from '@/assets/svg/LaserTarget.svg';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Button from '@/components/Button/Button';
import Section from '@/molecules/Section';

const classList = classNames(
    styles['not-found'],
    sectionStyles['section__grid-purple']
);
const NotFound = () => (
    <Section className={classList}>
        <Image
            src={LaserTarget}
            alt='Laser tag target'
            hasBorder={false}
            className={styles['not-found__image']}
        />
        <Heading size='xl'>Target out of range</Heading>
        <Heading color='blue' size='sm' as='p'>
            Page not found
        </Heading>
        <Button
            buttonData={{
                color: 'white',
                linkType: 'internal',
                internalLink: { slug: 'home' },
                label: 'Return to base'
            }}
        />
    </Section>
);

export default NotFound;
