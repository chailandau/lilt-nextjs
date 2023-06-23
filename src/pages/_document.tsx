import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" style={{ overflowX: 'hidden' }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
