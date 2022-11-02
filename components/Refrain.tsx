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

  const [firstLine, ...rest] = text.split('\n');

  return (
    <Box my='1.5rem'>
      <TopBorderWithLabel label='refrain' bgColor={gray200} />
      <Flex
        py='0.5rem'
        whiteSpace='pre-line'
        onClick={onToggle}
        borderBottom={`1px solid ${gray200}`}
      >
        <Collapse startingHeight='1.5em' in={isOpen}>
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
          {rest.join('\n')}
        </Collapse>
      </Flex>
    </Box>
  );
};

interface TopBorderWithLabel extends Pick<BoxProps, 'bgColor'> {
  label: string;
}

const TopBorderWithLabel: React.FC<TopBorderWithLabel> = ({
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
        mr='0.5rem'
      >
        {label}
      </Text>
      <Box w='100%' bgColor={bgColor} />
    </Flex>
  );
};
