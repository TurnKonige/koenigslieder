import { Koenigslied } from "../songs/koenigslied";
import { Schlachtruf } from "../songs/schlachtruf";

export interface SongData {
  title: string;
  lyrics: string;
}

export const FeaturedSongs: SongData[] = [
  {
    title: "Königslied",
    lyrics: Koenigslied,
  },
  {
    title: "Schlachtruf",
    lyrics: Schlachtruf, 
  },
];
