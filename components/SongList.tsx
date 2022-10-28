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
    <List spacing={5}>
      {songs.map(({ title }, index) => (
        <ListItem
          key={`${index}-${title}`}
          boxShadow='md'
          p='6'
          rounded='md'
          backgroundColor='#FFF'
          textAlign='center'
          fontSize='1.2rem'
          as='a'
          href={`/songs/${encodeUrl(title)}`}
          width='100%'
          display='block'
          onClick={() => fireGoogleAnalyticsEvent(title)}
        >
          {title}
        </ListItem>
      ))}
    </List>
  );
};
