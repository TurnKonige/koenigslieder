import { Flex, VStack } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { event } from 'nextjs-google-analytics';
import { ListItem } from './ListItem';
import { uniqueId } from 'lodash';

export interface PlaylistListProps {
  playlists: Playlist[];
}

export interface Playlist {
  title: string;
  link: string;
}

export const PlaylistList: React.FC<PlaylistListProps> = ({ playlists }) => {
  const fireGoogleAnalyticsEvent = (playlistName: string) => {
    event('click_playlist', {
      category: 'spotify_playlist',
      label: playlistName,
    });
  };

  return (
    <VStack spacing={5}>
      {playlists.map(({ title, link }) => (
        <ListItem
          href={link}
          onClick={() => fireGoogleAnalyticsEvent(title)}
          key={uniqueId('playlist_item_')}
        >
          <Flex justify='space-between' align='center'>
            {title}
            <FaSpotify color='#444' />
          </Flex>
        </ListItem>
      ))}
    </VStack>
  );
};
