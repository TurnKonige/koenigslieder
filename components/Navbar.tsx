import { Box, Icon } from '@chakra-ui/react';
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
      paddingX='1rem'
      paddingY='0.5rem'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      boxShadow='md'
      position='sticky'
      top='0'
      backgroundColor='#F4F4F4'
    >
      {isBasePath ? (
        <Icon as={CrownIcon} boxSize={8} />
      ) : (
        <BackButton variant='outline' />
      )}
      <Menu />
    </Box>
  );
};
