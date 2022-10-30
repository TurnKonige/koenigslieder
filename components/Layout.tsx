import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Flex width='100vw' minH='100vh' flexDir='column' bgColor='#F4F4F4'>
      <Head>
        <link rel='icon' href='/crown.svg' />
      </Head>
      <Navbar />
      <Container py='8' flexGrow={1}>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
