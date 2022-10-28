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
import { Refrain } from '../components/Refrain';

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

        return <Refrain text={entry.complete} />;
      },
    },
  };

  return {
    render: (richText: Document): ReactNode =>
      documentToReactComponents(richText, options),
  };
};
