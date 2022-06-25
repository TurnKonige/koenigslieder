import { GetStaticPaths, GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';

import { SongData, FeaturedSongs } from '../../lib/music-data';
import { Song } from '../../components/Song';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';

export interface SongProps {
  song: SongData;
}

export default function Songs({ song }: SongProps) {
  const metaTagTitle = `${song.title} | Königslieder`;
  const description = `Lyrics für ${song.title}!\n ${song.lyrics.slice(
    0,
    200
  )}…`;

  return (
    <Box display='flex' flexDirection='column' paddingX='5vw' paddingTop='1rem'>
      <MetaTags title={metaTagTitle} description={description} />
      <Song {...song} marginBottom='2rem' />
      <BackButton variant='solid' marginTop='2rem' />
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = FeaturedSongs.map((song) => {
    return {
      params: { id: song.title.toLowerCase() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const song = FeaturedSongs.find(
    (s) => s.title.toLowerCase() === (id as string).toLowerCase()
  );

  return {
    props: {
      song: song,
    },
  };
};
