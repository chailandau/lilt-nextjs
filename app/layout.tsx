import { Metadata } from 'next';

import { FOOTER_QUERY, HEADER_QUERY } from '@/api/graphqlQueries';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import { getData } from '@/utils/getData';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';

export const metadata: Metadata = {
    title: 'Long Island Laser Tag'
};

export const revalidate = 60;

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { Header: HeaderData } = await getData(HEADER_QUERY);

    const { Footer: FooterData } = await getData(FOOTER_QUERY);

    return (
        <html lang='en'>
            <body>
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
            </body>
        </html>
    );
}
