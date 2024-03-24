import { FC } from 'react';

import Menu from './components/Menu';
import SocialLink from './components/SocialLink';
import styles from './Footer.module.scss';

import { Footer_MenuItems, Footer_SocialLinks } from '@/api/graphqlTypes';
import liltLogo from '@/assets/svg/lilt/Logo.svg';
import limgLogo from '@/assets/svg/limg/Logo.svg';
import Image from '@/atoms/Image';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import { getCopyrightText } from '@/utils/getCopyRightText';

export interface FooterProps {
    /* Menu items to display */
    menuItems?: Footer_MenuItems[] | null;
    /* Social links */
    socialLinks?: Footer_SocialLinks[] | null;
    /* Copyright text */
    copyrightText?: string | null;
}

const greenTheme = process.env.NEXT_PUBLIC_THEME === 'green-theme';

const Footer: FC<FooterProps> = ({ socialLinks, menuItems, copyrightText }) => (
    <Section as='footer' className={styles['footer']}>
        <Flex className={styles['top-content']}>
            <Link
                href={process.env.NEXT_PUBLIC_BASE_URL as string}
                className={styles['logo']}
            >
                <Image
                    src={greenTheme ? limgLogo : liltLogo}
                    alt={
                        greenTheme
                            ? 'Long Island Mini Golf'
                            : 'Long Island Laser Tag'
                    }
                    hasBorder={false}
                    priority
                />
            </Link>
            {socialLinks && (
                <Flex className={styles['social-links']}>
                    {socialLinks?.map((socialLink) => (
                        <SocialLink
                            key={socialLink?.id}
                            socialLink={socialLink}
                        />
                    ))}
                </Flex>
            )}
        </Flex>

        <Flex className={styles['bottom-content']}>
            <Text size='xs' className={styles['copyright-desktop']}>
                {getCopyrightText(copyrightText)}
            </Text>
            {menuItems && <Menu menuItems={menuItems} />}
            <Text size='xs' className={styles['copyright-mobile']}>
                {getCopyrightText(copyrightText)}
            </Text>
        </Flex>
    </Section>
);

export default Footer;
