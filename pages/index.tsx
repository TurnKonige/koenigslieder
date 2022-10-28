import { Box, Text, Divider } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { MetaTags } from '../components/MetaTags';

import { PlaylistList } from '../components/PlaylistList';
import { SongList } from '../components/SongList';
import { contentfulClient } from '../lib/contentful';
import {
  getSongTitlesQuery,
  SongTitle,
  SongTitleResponse,
} from '../lib/queries/songTitles';

export interface HomeProps {
  songs: SongTitle[];
}

const Home: NextPage<HomeProps> = (props) => {
  const title = 'Königslieder 🎵 – Lieder der Karlsruher Könige';
  const description =
    'Lieder, Playlists, und Allerlei des Unisports Gerätturnen am KIT; auch bekannt als Karlsruher Könige! 🥳🎺👑';

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='center'
      paddingX='1.5rem'
      paddingY='1.5rem'
      width={['100vw', '90vw', '70vw', '50vw']}
    >
      <MetaTags title={title} description={description} />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='5vh'>
        Royale Songtexte
      </Text>
      <SongList {...props} />

      <Divider marginY='4vh' color='#A4A4A4' />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='5vh'>
        Playlists
      </Text>
      <PlaylistList />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await contentfulClient.request<SongTitleResponse>(
    getSongTitlesQuery
  );

  return {
    props: {
      songs: response.songCollection.items,
    },
  };
};
