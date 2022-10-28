import {
  Box,
  Collapse,
  Flex,
  Text,
  useDisclosure,
  useToken,
} from '@chakra-ui/react';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BsChevronDown } from 'react-icons/bs';
import { Document, MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import { ReactNode } from 'react';
import { fromPairs } from 'lodash';
import { RichTextLinks } from '../lib/queries/songs';

export const useRichText = (links: RichTextLinks) => {
  const entryMap = fromPairs(
    links.entries.block.map((entry) => [entry.sys.id, entry])
  );

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Text as='b'>{text}</Text>,
      [MARKS.ITALIC]: (text) => <Text as='i'>{text}</Text>,
      [MARKS.UNDERLINE]: (text) => <Text as='u'>{text}</Text>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Box whiteSpace='pre-line'>{children}</Box>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri}>{children}</Link>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap[node.data.target.sys.id];
        const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
        const [gray200] = useToken('colors', ['gray.200']);

        const [firstLine, ...rest] = entry.complete.split('\n');

        return (
          <Flex
            py='0.5rem'
            my='1.5rem'
            whiteSpace='pre-line'
            onClick={onToggle}
            borderY={`1px solid ${gray200}`}
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
        );
      },
    },
  };

  return {
    render: (richText: Document): ReactNode =>
      documentToReactComponents(richText, options),
  };
};
