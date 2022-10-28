import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

import { FeaturedSongs } from '../../lib/music-data';
import { SongText } from '../../components/SongText';
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
    <Container pt='2rem'>
      <MetaTags title={metaTagTitle} description={description} />
      <SongText {...song} />
    </Container>
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
