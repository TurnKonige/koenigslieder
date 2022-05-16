import { Box, ChakraProvider } from '@chakra-ui/react';
import { GoogleAnalytics, usePagesViews } from 'nextjs-google-analytics';

import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
  usePagesViews();

  return (
    <ChakraProvider>
      <GoogleAnalytics />
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
