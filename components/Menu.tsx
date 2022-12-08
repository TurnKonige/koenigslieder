import {
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiMenu } from 'react-icons/bi';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { HiOutlineAcademicCap } from 'react-icons/hi';

export const Menu: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <ChakraMenu autoSelect={false} placement='bottom'>
      <MenuButton
        as={IconButton}
        icon={<BiMenu />}
        fontSize='2rem'
        variant='none'
      />
      <MenuList rootProps={{ w: { base: '100%', md: 'auto' } }}>
        <MenuItem
          icon={<RiShoppingCart2Line />}
          onClick={() =>
            router.push('https://karlsruher-koenige.myspreadshop.de/')
          }
        >
          Königsshop
        </MenuItem>
        <MenuItem
          icon={<HiOutlineAcademicCap />}
          onClick={() =>
            router.push(
              'https://sport-hochschulsport.sport.kit.edu/angebote/aktueller_zeitraum/_Geraetturnen.html'
            )
          }
        >
          Hochschulsport
        </MenuItem>
        <MenuItem
          icon={<AiOutlineInstagram />}
          onClick={() =>
            router.push('https://www.instagram.com/karlsruher.koenige/')
          }
        >
          Instagram
        </MenuItem>
        <MenuItem
          icon={<AiFillGithub />}
          onClick={() =>
            router.push('https://github.com/Treborium/koenigslieder')
          }
        >
          GitHub
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  );
};
