export const getPlaylistsQuery = `
  query getPlaylists {
    playlistCollection(limit: 10) {
      items {
        title
        link
      }
    }
  }
`;

export interface PlaylistsResponse {
  playlistCollection: {
    items: Playlist[];
  };
}

export interface Playlist {
  title: string;
  link: string;
}
