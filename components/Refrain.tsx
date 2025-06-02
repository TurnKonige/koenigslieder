import {
  useDisclosure,
  useToken,
  Flex,
  Box,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

export interface RefrainProps {
  text: string;
}

const MotionBox = motion(Box);

export const Refrain: React.FC<RefrainProps> = ({ text }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [gray200] = useToken('colors', ['gray.200']);
  const [firstLine, ...lyricsRest] = text.split('\n');

  return (
    <Box my={6}>
      <TopBorderWithLabel label='refrain' bgColor={gray200} />
      <Box borderBottom={`1px solid ${gray200}`} w='100%'>
        <Flex
          py='0.5rem'
          onClick={onToggle}
          cursor='pointer'
          justify='space-between'
          align='center'
        >
          <Text>{firstLine}</Text>
          <Box
            transform={isOpen ? 'rotate(180deg)' : 'rotate(0)'}
            transition='0.2s'
            h='min-content'
            w='min-content'
          >
            <BsChevronDown />
          </Box>
        </Flex>

        <AnimatePresence initial={false}>
          {isOpen && (
            <MotionBox
              initial={{ height: '1.5em' }}
              animate={{ height: 'auto' }}
              exit={{ height: '1.5em' }}
              overflow='hidden'
            >
              <Text whiteSpace='pre-line' py={2}>
                {lyricsRest.join('\n')}
              </Text>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
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
