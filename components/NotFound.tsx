import { Box, Text } from '@chakra-ui/react';

export const NotFound: React.FC<{}> = () => {
  return (
    <Box>
      <Text
        as='h1'
        fontSize='2rem'
        textAlign='center'
        color='red'
        marginTop='15vh'
      >
        Nichts gefunden
      </Text>
      <Text
        as='h1'
        fontSize='3rem'
        textAlign='center'
        color='red'
        marginTop='5vh'
      >
        ¯\_(ツ)_/¯
      </Text>
    </Box>
  );
};
