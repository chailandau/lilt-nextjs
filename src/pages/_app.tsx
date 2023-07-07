import '@/assets/fonts/fonts.css';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout/Layout';
import '@/styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>);
}
