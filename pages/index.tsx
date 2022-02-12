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
      paddingX='5vw'
      paddingY='3vh'
      width={['100vw', '50vw']}
    >
      <Head>
        <title>Königslieder 🎵</title>
        <meta
          name='description'
          content='Ansammlung an königlichen Liedtexten und Playlists'
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
