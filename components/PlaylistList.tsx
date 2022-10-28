import { List, ListItem, Flex } from '@chakra-ui/react';
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
    <List spacing={5} variant='cards'>
      {playlists.map(({ title, link }, index) => (
        <ListItem
          key={`${index}-${title}`}
          as='a'
          href={link}
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
