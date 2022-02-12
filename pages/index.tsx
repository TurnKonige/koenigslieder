import { List, ListItem, Box, Text, Divider } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

import {
  SongData,
  FeaturedSongs,
  FeaturedPlaylists,
  PlaylistData,
} from "../lib/music-data";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="center"
      paddingX="5vw"
      paddingY="3vh"
      width={["100vw", "50vw"]}
    >
      <Text textAlign="center" as="h1" fontSize="2rem" marginBottom="5vh">
        Royale Songtexte
      </Text>
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
      <Divider marginY="4vh" color="#A4A4A4" />
      <Text textAlign="center" as="h1" fontSize="2rem" marginBottom="5vh">
        Playlists
      </Text>
      <List spacing={5}>
        {FeaturedPlaylists.map((playlist: PlaylistData) => (
          <ListItem
            boxShadow="md"
            p="6"
            rounded="md"
            backgroundColor="#FFF"
            fontSize="1.2rem"
            as="a"
            href={playlist.link}
            width="100%"
            display="block"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {playlist.title}
              <FaSpotify color="#444" />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
