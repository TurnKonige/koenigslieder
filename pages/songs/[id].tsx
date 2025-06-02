import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { SongTextProps, SongText } from '../../components/SongText';
import { BackButton } from '../../components/BackButton';
import { MetaTags } from '../../components/MetaTags';
import { songs } from '../../lib/queries/songs';
import { songTitles } from '../../lib/queries/songTitles';
import { encodeUrl } from '../../lib/url';

export interface SongProps {
  song: SongTextProps;
}

const Songs: NextPage<SongProps> = ({ song }) => {
  const metaTagTitle = `${song.title} | Königslieder`;
  const description = `Lyrics für ${song.title}!`;

  return (
    <Box>
      <MetaTags
        title={metaTagTitle}
        description={description}
        imagePreviewText={song.title}
      />
      <SongText {...song} />
      <BackButton w='100%' mt='8' />
    </Box>
  );
};

export default Songs;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = songTitles.map(({ title }) => ({
    params: { id: encodeUrl(title) },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const song = songs.find((s) => encodeUrl(s.title) === id);
  if (!song) {
    return { notFound: true };
  }
  return {
    props: { song },
  };
};
