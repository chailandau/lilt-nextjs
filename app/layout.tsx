import { Metadata } from 'next';

import { FOOTER_QUERY, HEADER_QUERY } from '@/api/graphqlQueries';
import CookieBanner from '@/components/CookieBanner';
import GoogleScript from '@/components/CookieBanner/GoogleScript';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import BackToTop from '@/molecules/BackToTop';
import { getData } from '@/utils/getData';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';

const isLimg = process.env.NEXT_PUBLIC_THEME === 'green-theme';

export const metadata: Metadata = {
    title: isLimg ? 'Long Island Mini Golf' : 'Long Island Laser Tag'
};
export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { Header: HeaderData } = await getData(HEADER_QUERY);

    const { Footer: FooterData } = await getData(FOOTER_QUERY);

    return (
        <html lang='en' className={process.env.NEXT_PUBLIC_THEME}>
            <GoogleScript />
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
