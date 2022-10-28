import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Flex, Text } from '@chakra-ui/react';

import { SongData, FeaturedSongs } from '../../lib/music-data';
import { Song } from '../../components/Song';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';
import { contentfulClient } from '../../lib/contentful';
import { songQuery, SongResponse } from '../../lib/queries/songs';
import { useEffect, useState } from 'react';
import { useRichText } from '../../hooks/useRIchText';

export interface SongProps {
  song: SongResponse;
}

const Songs: NextPage<SongProps> = ({ song }) => {
  // const metaTagTitle = `${song.title} | Königslieder`;
  // const description = `Lyrics für ${song.title}!\n ${song.lyrics.slice(
  //   0,
  //   200
  // )}…`;

  const koenigslied = song.songCollection.items[0];
  const renderer = useRichText(koenigslied.lyrics.links);

  return (
    <Box display='flex' flexDirection='column' paddingX='5vw' paddingTop='1rem'>
      {/* <MetaTags title={metaTagTitle} description={description} /> */}
      {renderer.render(koenigslied.lyrics.json)}
    </Box>
  );
};

export default Songs;

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
  // const song = FeaturedSongs.find(
  //   (s) => s.title.toLowerCase() === (id as string).toLowerCase()
  // );

  const song = await contentfulClient.request<SongResponse>(songQuery);

  return {
    props: {
      song,
    },
  };
};
