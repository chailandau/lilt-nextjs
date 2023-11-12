import { Metadata } from 'next';
import Script from 'next/script';

import { FOOTER_QUERY, HEADER_QUERY } from '@/api/graphqlQueries';
import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import BackToTop from '@/molecules/BackToTop';
import { getData } from '@/utils/getData';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';

export const metadata: Metadata = {
    title: 'Long Island Laser Tag'
};
export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { Header: HeaderData } = await getData(HEADER_QUERY);

    const { Footer: FooterData } = await getData(FOOTER_QUERY);

    return (
        <html lang='en'>
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
            <body>
                <CookieBanner />
                <Header
                    menuItems={HeaderData?.menuItems || null}
                    callToAction={HeaderData?.callToAction || null}
                />
                {children}
                <Footer
                    menuItems={FooterData?.menuItems}
                    socialLinks={FooterData?.socialLinks}
                    copyrightText={FooterData?.copyrightText}
                />
                <BackToTop />
            </body>
        </html>
    );
}
