import { SongTextProps } from '../../components/SongText';

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
    items: SongTextProps[];
  };
}
