import { Box, Container } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from './Link';

export const Footer: React.FC = () => {
  return (
    <Box width='100%' bgColor='brand.200'>
      <Container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        paddingY={4}
      >
        <Box>
          {/* <Text color='brand.900' display='inline-block' whiteSpace='pre-wrap'>
            Created by{' '}
          </Text>
          <Link
            color='teal.500'
            href='https://www.linkedin.com/in/robert-f-0b87a218a/'
          >
            Robert Fuchs
          </Link> */}
        </Box>
        <Link href='https://github.com/Treborium/koenigslieder'>
          <AiFillGithub
            size='1.5rem'
            aria-label='view source code on GitHub'
            color='brand.900'
          />
        </Link>
      </Container>
    </Box>
  );
};
