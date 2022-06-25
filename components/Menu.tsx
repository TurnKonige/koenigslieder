import {
  Menu as ChakraMenu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiMenu, BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

export const Menu: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        icon={<BiMenu />}
        fontSize='2rem'
        variant='none'
      />
      <MenuList>
        <MenuItem
          icon={<BiLinkExternal />}
          onClick={() =>
            router.push('https://karlsruher-koenige.myspreadshop.de/')
          }
        >
          Königsshop
        </MenuItem>
        <MenuItem
          icon={<BiLinkExternal />}
          onClick={() =>
            router.push(
              'https://buchsys.sport.uni-karlsruhe.de/angebote/aktueller_zeitraum/_Geraetturnen.html'
            )
          }
        >
          Hochschulsport
        </MenuItem>
        <MenuItem
          icon={<AiFillInstagram />}
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
