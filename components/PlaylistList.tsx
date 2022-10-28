import { List, ListItem, Box, Flex } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { event } from 'nextjs-google-analytics';

import { Playlist } from '../lib/queries/playlists';

export interface PlaylistListProps {
  playlists: Playlist[];
}

export const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  const fireGoogleAnalyticsEvent = (playlistName: string) => {
    event('click_playlist', {
      category: 'spotify_playlist',
      label: playlistName,
    });
  };

  return (
    <List spacing={5}>
      {playlists.map(({ title, link }, index) => (
        <ListItem
          key={`${index}-${title}`}
          boxShadow='md'
          p='6'
          rounded='md'
          backgroundColor='#FFF'
          fontSize='1.2rem'
          as='a'
          href={link}
          width='100%'
          display='block'
          onClick={() => fireGoogleAnalyticsEvent(title)}
        >
          <Flex justify='space-between' align='center'>
            {title}
            <FaSpotify color='#444' />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};
