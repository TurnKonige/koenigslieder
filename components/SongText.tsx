import { Box, Text } from '@chakra-ui/react';

export interface SongTextProps {
  title: string;
  lyrics: string;
}

export const SongText: React.FC<SongTextProps> = ({ title, lyrics }) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Text whiteSpace="pre-wrap">{lyrics}</Text>
    </Box>
  );
};
