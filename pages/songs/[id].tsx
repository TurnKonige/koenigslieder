import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Box } from '@chakra-ui/react';

import { SongData, FeaturedSongs } from '../../lib/music-data';
import { Song } from '../../components/Song';
import { Error } from '../../components/Error';
import { BackButton } from '../../components/BackButton';

export interface SongProps {
  song: SongData | null;
}

export default function Songs({ song }: SongProps) {
  return (
    <Box display='flex' flexDirection='column' paddingX='5vw' paddingTop='1rem'>
      <Head>
        <title>{song.title}</title>
        <meta name='description' content={`Lyrics für ${song.title}`} />
      </Head>
      {song ? (
        <Song {...song} marginBottom='2rem' />
      ) : (
        <Error message='Nichts gefunden 🤷' />
      )}
      <BackButton variant='solid' marginTop='2rem' />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const song = FeaturedSongs.find(
    (s) => s.title.toLowerCase() === (id as string).toLowerCase()
  );

  return {
    props: {
      song: song || null,
    },
  };
};
