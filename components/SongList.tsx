import { VStack } from '@chakra-ui/react';
import { uniqueId } from 'lodash';
import { event } from 'nextjs-google-analytics';

import { SongTitle } from '../lib/queries/songTitles';
import { encodeUrl } from '../lib/url';
import { ListItem } from './ListItem';

export interface SongListProps {
  songs: SongTitle[];
}

export const SongList: React.FC<SongListProps> = ({ songs }) => {
  const fireGoogleAnalyticsEvent = (songName: string) => {
    event('click_song', {
      category: 'song_list',
      label: songName,
    });
  };

  return (
    <VStack spacing={5}>
      {songs.map(({ title }) => (
        <ListItem
          href={`/songs/${encodeUrl(title)}`}
          onClick={() => fireGoogleAnalyticsEvent(title)}
          key={uniqueId('song_list_item_')}
        >
          {title}
        </ListItem>
      ))}
    </VStack>
  );
};
