export const getSongTitlesQuery = `
  query getSongTitles {
    songCollection(limit: 10) {
      items {
        title
      }
    }
  }
`;

export interface SongTitleResponse {
  songCollection: {
    items: SongTitle[];
  };
}

export interface SongTitle {
  title: string;
}
