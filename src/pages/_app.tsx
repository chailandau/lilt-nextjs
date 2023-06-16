import '@/assets/fonts/fonts.css';
import '@/styles/main.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
