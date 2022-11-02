import {
  useDisclosure,
  useToken,
  Flex,
  Box,
  Text,
  Collapse,
  BoxProps,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export interface RefrainProps {
  text: string;
}

export const Refrain: React.FC<RefrainProps> = ({ text }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [gray200] = useToken('colors', ['gray.200']);

  const [firstLine, ...lyricsRest] = text.split('\n');

  return (
    <Box my={6}>
      <TopBorderWithLabel label='refrain' bgColor={gray200} />
      <Flex
        py='0.5rem'
        whiteSpace='pre-line'
        onClick={onToggle}
        cursor='pointer'
        borderBottom={`1px solid ${gray200}`}
        w='100%'
      >
        <Collapse
          startingHeight='1.5em'
          in={isOpen}
          style={{ width: 'inherit' }}
        >
          <Flex justify='space-between' align='center'>
            {firstLine}
            <Box
              transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
              transition='0.2s'
              h='min-content'
              w='min-content'
            >
              <BsChevronDown />
            </Box>
          </Flex>
          {lyricsRest.join('\n')}
        </Collapse>
      </Flex>
    </Box>
  );
};

interface TopBorderWithLabelProps extends Pick<BoxProps, 'bgColor'> {
  label: string;
}

const TopBorderWithLabel: React.FC<TopBorderWithLabelProps> = ({
  label,
  bgColor,
}) => {
  return (
    <Flex>
      <Text
        textTransform='uppercase'
        fontSize='0.6rem'
        lineHeight='1px'
        color='gray.400'
        mr={2}
      >
        {label}
      </Text>
      <Box bgColor={bgColor} flexGrow={1} />
    </Flex>
  );
};
