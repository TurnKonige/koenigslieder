import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { SongTextProps, SongText } from '../../components/SongText';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';
import { contentfulClient } from '../../lib/contentful';
import { getSongQuery, SongResponse } from '../../lib/queries/songs';
import {
  getSongTitlesQuery,
  SongTitleResponse,
} from '../../lib/queries/songTitles';
import { encodeUrl } from '../../lib/url';

export interface SongProps {
  song: SongTextProps;
}

const Songs: NextPage<SongProps> = ({ song }) => {
  const metaTagTitle = `${song.title} | Königslieder`;
  const description = `Lyrics für ${song.title}!`;

  return (
    <Box>
      <MetaTags title={metaTagTitle} description={description} />
      <SongText {...song} />
      <BackButton w='100%' mt='8' />
    </Box>
  );
};

export default Songs;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await contentfulClient.request<SongTitleResponse>(
    getSongTitlesQuery
  );

  const paths = response.songCollection.items.map(({ title }) => ({
    params: {
      id: encodeUrl(title),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<SongProps> = async (context) => {
  const song = await contentfulClient.request<SongResponse>(getSongQuery, {
    title: context.params.id,
  });

  return {
    props: {
      song: song.songCollection.items[0],
    },
  };
};
