import { Text, Divider, Container } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { MetaTags } from '../components/MetaTags';

import { Playlist, PlaylistList } from '../components/PlaylistList';
import { SongList } from '../components/SongList';
import { contentfulClient } from '../lib/contentful';
import { getPlaylistsQuery, PlaylistsResponse } from '../lib/queries/playlists';
import {
  getSongTitlesQuery,
  SongTitle,
  SongTitleResponse,
} from '../lib/queries/songTitles';

export interface HomeProps {
  songs: SongTitle[];
  playlists: Playlist[];
}

const Home: NextPage<HomeProps> = ({ songs, playlists }) => {
  const title = 'Königslieder 🎵 – Lieder der Karlsruher Könige';
  const description =
    'Lieder, Playlists, und Allerlei des Unisports Gerätturnen am KIT; auch bekannt als Karlsruher Könige! 🥳🎺👑';

  return (
    <Container pt='4'>
      <MetaTags title={title} description={description} />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='8'>
        Royale Songtexte
      </Text>
      <SongList songs={songs} />

      <Divider marginY='8' color='#A4A4A4' />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='8'>
        Playlists
      </Text>
      <PlaylistList playlists={playlists} />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const songTitles = await contentfulClient.request<SongTitleResponse>(
    getSongTitlesQuery
  );

  const playlists = await contentfulClient.request<PlaylistsResponse>(
    getPlaylistsQuery
  );

  return {
    props: {
      songs: songTitles.songCollection.items,
      playlists: playlists.playlistCollection.items,
    },
  };
};
