import { List, ListItem, Box } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';

import { FeaturedPlaylists } from '../lib/music-data';

export const PlaylistList: React.FC<{}> = () => {
  return (
    <List spacing={5}>
      {FeaturedPlaylists.map((playlist, index) => (
        <ListItem
          key={`${index}-${playlist.title}`}
          boxShadow='md'
          p='6'
          rounded='md'
          backgroundColor='#FFF'
          fontSize='1.2rem'
          as='a'
          href={playlist.link}
          width='100%'
          display='block'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            {playlist.title}
            <FaSpotify color='#444' />
          </Box>
        </ListItem>
      ))}
    </List>
  );
};
