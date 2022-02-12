import { List, ListItem } from "@chakra-ui/react";
import { FeaturedSongs, SongData } from "../lib/music-data";

export const SongList: React.FC<{}> = () => {
  return (
    <List spacing={5}>
      {FeaturedSongs.map((song: SongData) => (
        <ListItem
          boxShadow="md"
          p="6"
          rounded="md"
          backgroundColor="#FFF"
          textAlign="center"
          fontSize="1.2rem"
          as="a"
          href={`/songs/${encodeURIComponent(song.title.toLowerCase())}`}
          width="100%"
          display="block"
        >
          {song.title}
        </ListItem>
      ))}
    </List>
  );
};
