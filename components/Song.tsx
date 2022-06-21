import { Box, BoxProps, Text } from '@chakra-ui/react';

interface SongProps extends BoxProps {
  title: string;
  lyrics: string;
}

export const Song: React.FC<SongProps> = (props) => {
  const { title, lyrics, ...rest } = props;

  return (
    <Box {...rest}>
      <Text as='h1' fontSize='1.5rem' paddingBottom='2vh' textAlign='center'>
        {title.toUpperCase()}
      </Text>
      <Text
        whiteSpace='pre-line'
        textAlign={{
          base: 'left',
          md: 'center',
        }}
      >
        {lyrics}
      </Text>
    </Box>
  );
};
