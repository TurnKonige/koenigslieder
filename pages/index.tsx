import { Text, Divider, Box } from '@chakra-ui/react';
import { sortBy } from 'lodash';
import { GetStaticProps, NextPage } from 'next';

import { MetaTags } from '../components/MetaTags';
import { Playlist, PlaylistList } from '../components/PlaylistList';
import { SongList } from '../components/SongList';
import { playlists } from '../lib/queries/playlists';
import { songTitles } from '../lib/queries/songTitles';

export interface HomeProps {
  songs: { title: string }[];
  playlists: Playlist[];
}

const Home: NextPage<HomeProps> = ({ songs, playlists }) => {
  const title = 'Königslieder 🎵 – Lieder der Karlsruher Könige';
  const description =
    'Lieder, Playlists, und Allerlei des Unisports Gerätturnen am KIT; auch bekannt als Karlsruher Könige! 🥳🎺👑';

  return (
    <Box>
      <MetaTags
        title={title}
        description={description}
        imagePreviewText='Königslieder 🎵'
      />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='8'>
        Royale Songtexte
      </Text>
      <SongList songs={songs} />

      <Divider marginY='8' color='brand.500' />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='8'>
        Spotify Playlists
      </Text>
      <PlaylistList playlists={playlists} />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const songs = sortBy(songTitles, (song) => song.title);
  return {
    props: {
      songs,
      playlists,
    },
  };
};
