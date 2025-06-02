import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  usePageViews();

  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
