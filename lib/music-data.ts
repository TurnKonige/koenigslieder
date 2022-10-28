import { Koenigslied } from '../songs/koenigslied';
import { Schlachtruf } from '../songs/schlachtruf';

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
    title: 'Königliche Feierei 💃',
    link: 'https://open.spotify.com/playlist/2ZDWzX3wgNpBnqKiiwxYXS?si=eecc52fb988e4273',
  },
  {
    title: 'Pegelmacher 🍻📈🔥',
    link: 'https://open.spotify.com/playlist/00iJAUKPKaDLjeXQKliYpR?si=8f990c8766bb4986',
  },
];
