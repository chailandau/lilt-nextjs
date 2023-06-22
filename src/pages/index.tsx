import Head from 'next/head';

import OutdoorTents from '@/assets/outdoor_tents.jpg';
import Image from '@/atoms/Image/Image';
import Header from '@/components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ maxWidth: '590px' }}>
        <Image
          src={OutdoorTents}
          alt="Outdoor Tents"
          hasBorder
          priority
        />
      </div>
    </>
  );
}
