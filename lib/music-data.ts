import { URL } from 'url';
import { Koenigslied } from '../songs/koenigslied';
import { Schlachtruf } from '../songs/schlachtruf';

export interface SongData {
  title: string;
  lyrics: string;
}

export const FeaturedSongs: SongData[] = [
  {
    title: 'Königslied 👑',
    lyrics: Koenigslied,
  },
  {
    title: 'Schlachtruf 🪖',
    lyrics: Schlachtruf,
  },
];

export interface PlaylistData {
  title: string;
  link: string;
}

export const FeaturedPlaylists: PlaylistData[] = [
  {
    title: 'Trainingsmusik 🤸‍♀️💪',
    link: 'https://open.spotify.com/playlist/559Cx6BUvL4PkQWIhpGY6V?si=7567b18866dc4413',
  },
  {
    title: 'So geht königliche Feierei 💃',
    link: 'https://open.spotify.com/playlist/2ZDWzX3wgNpBnqKiiwxYXS?si=eecc52fb988e4273',
  },
];
