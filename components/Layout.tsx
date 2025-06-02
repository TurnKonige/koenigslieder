import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex width='100%' minH='100vh' flexDir='column' bgColor='brand.100'>
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
