import { Document } from '@contentful/rich-text-types';

export const getSongQuery = `
  query getSongs($title: String!) {
    songCollection(limit: 10, where: { title_contains: $title }) {
      items {
        title
        lyrics {
          json
          links {
            entries {
              block {
                typename: __typename
                sys {
                  id
                }
                ... on Refrain {
                  preview
                  complete
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface SongResponse {
  songCollection: {
    items: SongItem[];
  };
}

export interface SongItem {
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
