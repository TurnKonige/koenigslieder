import { List, ListItem } from '@chakra-ui/react';
import { FeaturedSongs } from '../lib/music-data';

import { event } from 'nextjs-google-analytics';

export const SongList: React.FC<{}> = () => {
  const fireGoogleAnalyticsEvent = (songName: string) => {
    event('click_song', {
      category: 'song_list',
      label: songName,
    });
  };

  return (
    <List spacing={5}>
      {FeaturedSongs.map((song, index) => (
        <ListItem
          key={`${index}-${song.title}`}
          boxShadow='md'
          p='6'
          rounded='md'
          backgroundColor='#FFF'
          textAlign='center'
          fontSize='1.2rem'
          as='a'
          href={`/songs/${encodeURIComponent(song.title.toLowerCase())}`}
          width='100%'
          display='block'
          onClick={() => fireGoogleAnalyticsEvent(song.title)}
        >
          {song.title}
        </ListItem>
      ))}
    </List>
  );
};
