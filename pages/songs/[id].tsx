import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Container } from '@chakra-ui/react';

import { SongText } from '../../components/SongText';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';
import { contentfulClient } from '../../lib/contentful';
import { SongItem, getSongQuery, SongResponse } from '../../lib/queries/songs';
import {
  getSongTitlesQuery,
  SongTitleResponse,
} from '../../lib/queries/songTitles';
import { encodeUrl } from '../../lib/url';

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
      <BackButton w='100%' mt='2rem' />
    </Container>
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

  console.log('Paths', paths);

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
