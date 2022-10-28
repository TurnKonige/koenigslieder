import { Box, Text } from '@chakra-ui/react';
import { useRichText } from '../hooks/useRIchText';
import { SongItem } from '../lib/queries/songs';

export const SongText: React.FC<SongItem> = ({ title, lyrics }) => {
  const renderer = useRichText(lyrics.links);

  return (
    <Box>
      <Text textAlign='center' as='h1' fontSize='2rem' mb='2rem'>
        {title}
      </Text>
      {renderer.render(lyrics.json)}
    </Box>
  );
};
