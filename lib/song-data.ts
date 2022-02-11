import { Koenigslied } from "../songs/koenigslied";

export interface SongData {
  title: string;
  lyrics: string;
}

export const FeaturedSongs: SongData[] = [
  {
    title: "Königslied",
    lyrics: Koenigslied,
  }
];
