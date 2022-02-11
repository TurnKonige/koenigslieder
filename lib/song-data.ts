import { Koenigslied } from "../songs/koenigslied";

export interface SongData {
  title: string;
  lyrics: string;
}

export const Songs: SongData[] = [
  {
    title: "Königslied",
    lyrics: Koenigslied,
  }
];
