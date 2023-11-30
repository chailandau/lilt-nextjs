'use client';

import cookie from 'js-cookie';
import Script from 'next/script';
import { useEffect, useState } from 'react';

import useStore from '@/store/useStore';

const GoogleScript = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    const { showCookieBanner } = useStore();

    useEffect(() => {
        setCookiesAccepted(cookie.get('cookieConsent') === 'accepted');
    }, [showCookieBanner]);

    return (
        cookiesAccepted && (
            <>
                <Script
                    strategy='afterInteractive'
                    src='https://www.googletagmanager.com/gtag/js?id=G-7Y1YQ9834N'
                />
                <Script
                    id='google-analytics'
                    strategy='afterInteractive'
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-SPPSLWSVHZ');
                `
                    }}
                />
            </>
        )
    );
};

export default GoogleScript;
