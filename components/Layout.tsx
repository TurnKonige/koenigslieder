import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Navbar } from './Navbar';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Box width='100vw' minHeight='100vh' backgroundColor='#F4F4F4'>
      <Head>
        <link rel='icon' href='/crown.svg' />
      </Head>
      <Navbar />
      {children}
    </Box>
  );
};
