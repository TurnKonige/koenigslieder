import { Box, Heading, Text } from '@chakra-ui/react';
import { useRichText } from '../hooks/useRIchText';
import { SongItem } from '../lib/queries/songs';

export const SongText: React.FC<SongItem> = ({ title, lyrics }) => {
  const renderer = useRichText(lyrics.links);

  return (
    <Box>
      <Heading as='h1' size='xl' textAlign='center' mb='3rem' color='gray.800'>
        {title}
      </Heading>
      {renderer.render(lyrics.json)}
    </Box>
  );
};
