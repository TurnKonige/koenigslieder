import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';

import { SongData, FeaturedSongs } from '../../lib/music-data';
import { Song } from '../../components/Song';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';
import { contentfulClient } from '../../lib/contentful';
import { SongItem, songQuery, SongResponse } from '../../lib/queries/songs';

export interface SongProps {
  song: SongItem;
}

const Songs: NextPage<SongProps> = ({ song }) => {
  const metaTagTitle = `${song.title} | Königslieder`;
  const description = `Lyrics für ${song.title}!`; // \n ${song.lyrics.slice(0, 200)}…`

  return (
    <Box display='flex' flexDirection='column' paddingX='5vw' paddingTop='1rem'>
      <MetaTags title={metaTagTitle} description={description} />
      <Song {...song} />
    </Box>
  );
};

export default Songs;

export const getStaticPaths: GetStaticPaths = async (context) => {
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
  console.log(context.params.id);
  const song = await contentfulClient.request<SongResponse>(songQuery, {
    title: context.params.id,
  });

  return {
    props: {
      song: song.songCollection.items[0],
    },
  };
};
