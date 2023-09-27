import { Metadata } from 'next';

import { HEADER_QUERY } from '@/api/graphqlQueries';
import OutdoorTents from '@/assets/outdoor_tents.jpg';
import Image from '@/atoms/Image';
import Header from '@/components/Header/Header';
import { getData } from '@/utils/getData';
import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';

export const revalidate = 60;
export const metadata: Metadata = {
    title: 'Long Island Laser Tag'
};

export default async function RootLayout() {
    const { Header: HeaderData } = await getData(HEADER_QUERY);

    return (
        <html lang='en'>
            <body>
                <Header
                    menuItems={HeaderData?.menuItems || null}
                    callToAction={HeaderData?.callToAction || null}
                />
                <div style={{ maxWidth: '590px' }}>
                    <Image
                        src={OutdoorTents}
                        alt='Outdoor Tents'
                        hasBorder
                        priority
                    />
                </div>
            </body>
        </html>
    );
}
