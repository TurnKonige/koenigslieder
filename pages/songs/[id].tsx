import NextLink from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { Box, IconButton } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';

import { SongData, FeaturedSongs } from '../../lib/music-data';
import { Song } from '../../components/Song';
import { Error } from '../../components/Error';

export interface SongProps {
  song: SongData | null;
}

export default function Songs(props: SongProps) {
  const { song } = props;

  return (
    <Box paddingX='5vw' paddingY='2vh'>
      <Head>
        <title>{song.title}</title>
        <meta name='description' content={`Lyrics für ${song.title}`} />
      </Head>
      <NextLink href='/' passHref>
        <IconButton
          icon={<BiArrowBack />}
          aria-label='navigate back'
          variant='outline'
        />
      </NextLink>
      {song ? <Song {...song} /> : <Error message='Nichts gefunden' />}
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
