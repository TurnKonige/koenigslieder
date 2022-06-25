import { Box, Text, Divider } from '@chakra-ui/react';
import Head from 'next/head';

import { PlaylistList } from '../components/PlaylistList';
import { SongList } from '../components/SongList';

export default function Home() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignSelf='center'
      paddingX='1.5rem'
      paddingTop='1.5rem'
      width={['100vw', '90vw', '70vw', '50vw']}
    >
      <Head>
        <title>Königslieder 🎵 – Lieder der Karlsruher Könige </title>
        <meta
          name='description'
          content='Lieder, Playlists, und Allerlei des Unisports Gerätturnen am KIT; auch bekannt als Karlsruher Könige! 🥳🎺👑'
        />
      </Head>
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
