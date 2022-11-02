import { List, ListItem } from '@chakra-ui/react';
import { event } from 'nextjs-google-analytics';

import { SongTitle } from '../lib/queries/songTitles';
import { encodeUrl } from '../lib/url';

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
    <List spacing={5} variant='cards'>
      {songs.map(({ title }, index) => (
        <ListItem
          key={`${index}-${title}`}
          as='a'
          href={`/songs/${encodeUrl(title)}`}
          onClick={() => fireGoogleAnalyticsEvent(title)}
        >
          {title}
        </ListItem>
      ))}
    </List>
  );
};
