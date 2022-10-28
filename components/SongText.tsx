import { Box, Text } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { useRichText } from '../hooks/useRIchText';

export interface SongTextProps {
  title: string;
  lyrics: {
    json: Document;
    links: RichTextLinks;
  };
}

export interface RichTextLinks {
  entries: {
    block: Refrain[];
  };
}

interface Refrain {
  typename: 'Refrain';
  preview: string;
  complete: string;
  sys: {
    id: string;
  };
}

export const SongText: React.FC<SongTextProps> = ({ title, lyrics }) => {
  const renderer = useRichText(lyrics.links);

  return (
    <Box>
      <Text textAlign='center' as='h1' fontSize='2rem' mb='4'>
        {title}
      </Text>
      {renderer.render(lyrics.json)}
    </Box>
  );
};
