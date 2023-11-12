'use client';

import { m, useReducedMotion } from 'framer-motion';
import cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';

import linkStyles from '../../atoms/Link/Link.module.scss';

import styles from './CookieBanner.module.scss';

import Container from '@/atoms/Container';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import ButtonMolecule from '@/molecules/ButtonMolecule/ButtonMolecule';
import Flex from '@/molecules/Flex';
import { backToTop } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    const prefersReducedMotion = useReducedMotion() || false;

    useEffect(() => {
        const consentCookie = cookie.get('cookieConsent');

        if (!consentCookie) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        setShowBanner(false);
        cookie.set('cookieConsent', 'accepted', { expires: 365 });
    };

    const handleReject = () => {
        setShowBanner(false);
        cookie.set('cookieConsent', 'rejected', { expires: 365 });
    };

    if (!showBanner) {
        return null;
    }

    return (
        <LazyAnimatePresence>
            {showBanner && (
                <m.div
                    className={styles['cookie-banner']}
                    variants={backToTop(prefersReducedMotion)}
                    initial='hidden'
                    animate={showBanner ? 'visible' : 'hidden'}
                    exit='hidden'
                >
                    <Container>
                        <Text className={styles['cookie-banner__text']}>
                            Long Island Laser Tag uses cookies to improve your
                            browsing experience.
                        </Text>
                        <Text size='sm' as='span'>
                            Read our
                            <Link
                                href={`${
                                    process.env.NEXT_PUBLIC_BASE_URL as string
                                }/privacy-policy`}
                                className={linkStyles['link__rich-text']}
                            >
                                Privacy Policy
                            </Link>
                            to learn more.
                        </Text>
                    </Container>
                    <Flex className={styles['cookie-banner__btns']}>
                        <ButtonMolecule onClick={handleAccept}>
                            Accept
                        </ButtonMolecule>
                        <ButtonMolecule
                            variant='link'
                            onClick={handleReject}
                            className={styles['cookie-banner__reject']}
                        >
                            Reject
                        </ButtonMolecule>
                    </Flex>
                </m.div>
            )}
        </LazyAnimatePresence>
    );
};

export default CookieBanner;
