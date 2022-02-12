import { Box, Text } from '@chakra-ui/react';

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = (props) => {
  return (
    <Box>
      <Text
        as='h1'
        fontSize='2rem'
        textAlign='center'
        color='red'
        marginTop='15vh'
      >
        {props.message}
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
