import { Box, Container, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiVipCrownFill as CrownIcon } from 'react-icons/ri';

import { BackButton } from './BackButton';
import { Menu } from './Menu';

export const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const isBasePath = router.pathname === '/';

  return (
    <Box
      width='100vw'
      paddingY={1}
      boxShadow='md'
      position='sticky'
      top='0'
      bgColor='background'
    >
      <Container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        {isBasePath ? (
          <Icon as={CrownIcon} boxSize={8} />
        ) : (
          <BackButton variant='outline' />
        )}
        <Menu />
      </Container>
    </Box>
  );
};
