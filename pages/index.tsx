import { Box, Text, Divider } from '@chakra-ui/react';
import Head from 'next/head';
import { MetaTags } from '../components/MetaTags';

import { PlaylistList } from '../components/PlaylistList';
import { SongList } from '../components/SongList';

export default function Home() {
  const title = 'Königslieder 🎵 – Lieder der Karlsruher Könige';
  const description =
    'Lieder, Playlists, und Allerlei des Unisports Gerätturnen am KIT; auch bekannt als Karlsruher Könige! 🥳🎺👑';

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='center'
      paddingX='1.5rem'
      paddingTop='1.5rem'
      width={['100vw', '90vw', '70vw', '50vw']}
    >
      <MetaTags title={title} description={description} />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='5vh'>
        Royale Songtexte
      </Text>
      <SongList />

      <Divider marginY='4vh' color='#A4A4A4' />

      <Text textAlign='center' as='h1' fontSize='2rem' marginBottom='5vh'>
        Playlists
      </Text>
      <PlaylistList />
    </Box>
  );
}
