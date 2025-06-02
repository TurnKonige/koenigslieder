import { ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';

import { Layout } from '../components/Layout';
import { theme } from '../theme';

export default function App({ Component, pageProps }) {
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
