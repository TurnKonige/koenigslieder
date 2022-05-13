import { Box, ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';

import { GTM_ID, pageview } from '../lib/analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          minHeight='100vh'
        >
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}
