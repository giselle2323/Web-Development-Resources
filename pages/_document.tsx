import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
     <Head>
        <link href="https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}