import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BackButton } from './BackButton';
import { Menu } from './Menu';

export const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const isBasePath = router.pathname === '/';

  return (
    <Box
      width='100vw'
      padding='1rem'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      {isBasePath ? <Box /> : <BackButton variant='outline' />}
      <Menu />
    </Box>
  );
};
