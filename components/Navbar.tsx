import { Box, Container, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiVipCrownFill as CrownIcon } from 'react-icons/ri';

import { BackButton } from './BackButton';
import { Menu } from './Menu';
import { ProgressBar } from './ProgressBar';

export const Navbar: React.FC = () => {
  const router = useRouter();
  const isBasePath = router.pathname === '/';

  return (
    <Box
      width='100%'
      boxShadow='md'
      position='sticky'
      top='0'
      bgColor='brand.100'
      borderBottom='brand.200'
    >
      <Container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        paddingY={2}
      >
        {isBasePath ? (
          <Icon as={CrownIcon} boxSize={8} />
        ) : (
          <BackButton variant='outline' />
        )}
        <Menu />
      </Container>
      <ProgressBar />
    </Box>
  );
};
