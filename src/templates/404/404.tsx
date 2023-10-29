import styles from './404.module.scss';

import LaserTarget from '@/assets/svg/LaserTarget.svg';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Section from '@/molecules/Section';

const NotFound = () => (
    <Section className={styles['not-found']}>
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
    </Section>
);

export default NotFound;
