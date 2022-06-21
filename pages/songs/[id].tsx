import Head from 'next/head';
import { useRouter } from 'next/router';
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
    <Box paddingX='5vw' paddingTop='2vh'>
      <Head>
        <title>{song.title}</title>
        <meta name='description' content={`Lyrics für ${song.title}`} />
      </Head>
      <BackButton />
      {song ? (
        <Song {...song} marginBottom='2rem' />
      ) : (
        <Error message='Nichts gefunden 🤷' />
      )}
      <BackButton />
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
