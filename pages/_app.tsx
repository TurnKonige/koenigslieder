import { Box, ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics, usePagesViews } from 'nextjs-google-analytics';

import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
import { theme } from '../theme';

export default function App({ Component, pageProps }) {
  usePagesViews();

  return (
    <ChakraProvider theme={theme}>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
