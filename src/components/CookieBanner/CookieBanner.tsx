'use client';

import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { m, useReducedMotion } from 'framer-motion';
import cookie from 'js-cookie';
import React, { useEffect } from 'react';

import linkStyles from '../../atoms/Link/Link.module.scss';

import styles from './CookieBanner.module.scss';

import Container from '@/atoms/Container';
import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import ButtonMolecule from '@/molecules/ButtonMolecule/ButtonMolecule';
import Flex from '@/molecules/Flex';
import Section from '@/molecules/Section';
import useStore from '@/store/useStore';
import { backToTop } from '@/utils/framer/animations';
import LazyAnimatePresence from '@/utils/framer/LazyAnimatePresence';
import { setNoScroll } from '@/utils/setNoScroll';

const isLimg = process.env.NEXT_PUBLIC_THEME === 'green-theme';

const CookieBanner = () => {
    const { showCookieBanner, setShowCookieBanner } = useStore();

    const prefersReducedMotion = useReducedMotion() || false;

    useEffect(() => {
        const consentCookie = cookie.get('cookieConsent');

        if (!consentCookie) {
            setShowCookieBanner(true);
        }
    }, []);
    useEffect(() => {
        setNoScroll(showCookieBanner);
    }, [showCookieBanner]);

    const handleAccept = () => {
        setShowCookieBanner(false);
        cookie.set('cookieConsent', 'accepted', { expires: 365 });
    };

    const handleReject = () => {
        setShowCookieBanner(false);
        cookie.set('cookieConsent', 'rejected', { expires: 365 });
    };

    if (!showCookieBanner) {
        return null;
    }

    const classList = classNames(
        styles['cookie-banner'],
        styles[process.env.NEXT_PUBLIC_THEME as string]
    );

    return (
        <LazyAnimatePresence>
            {showCookieBanner && (
                <m.div
                    className={classList}
                    variants={backToTop(prefersReducedMotion)}
                    initial='hidden'
                    animate={showCookieBanner ? 'visible' : 'hidden'}
                    exit='hidden'
                >
                    <FocusTrap
                        active={showCookieBanner}
                        focusTrapOptions={{
                            initialFocus: false
                        }}
                    >
                        <Section
                            as='div'
                            className={styles['cookie-banner__content']}
                        >
                            <Flex
                                className={
                                    styles['cookie-banner__text-container']
                                }
                            >
                                <Text className={styles['cookie-banner__text']}>
                                    {isLimg
                                        ? 'Long Island Mini Golf'
                                        : 'Long Island Laser Tag'}{' '}
                                    uses cookies to improve your browsing
                                    experience.
                                </Text>
                                <Text
                                    size='sm'
                                    as='span'
                                    className={styles['cookie-banner__text-sm']}
                                >
                                    Read our
                                    <Link
                                        href={`${
                                            process.env
                                                .NEXT_PUBLIC_BASE_URL as string
                                        }/privacy-policy`}
                                        className={
                                            linkStyles['link__rich-text']
                                        }
                                    >
                                        Privacy Policy
                                    </Link>
                                    to learn more.
                                </Text>
                            </Flex>

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
                        </Section>
                    </FocusTrap>
                </m.div>
            )}
            <Container className={styles['cookie-banner__overlay']}></Container>
        </LazyAnimatePresence>
    );
};

export default CookieBanner;
