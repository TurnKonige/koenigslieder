import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Script from 'next/script';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Box width='100vw' minHeight='100vh' backgroundColor='#F4F4F4'>
      <Head>
        <link rel='icon' href='/crown.svg' />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-317H6WDX0R'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-317H6WDX0R');
        `}
        </Script>
      </Head>
      {children}
    </Box>
  );
};
