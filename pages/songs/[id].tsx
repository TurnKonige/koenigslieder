import { SongData, FeaturedSongs } from '../../lib/music-data';

import { Song } from '../../components/Song';

import { Box, IconButton } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import { BiArrowBack } from 'react-icons/bi';
import NextLink from 'next/link';
import { NotFound } from '../../components/NotFound';

export interface SongProps {
  song: SongData | null;
}

export default function Songs(props: SongProps) {
  const { song } = props;

  return (
    <Box paddingX='5vw' paddingY='2vh'>
      <NextLink href='/' passHref>
        <IconButton
          icon={<BiArrowBack />}
          aria-label='navigate back'
          variant='outline'
        />
      </NextLink>
      {song ? <Song {...song} /> : <NotFound />}
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
