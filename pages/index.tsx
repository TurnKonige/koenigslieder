import { List, ListItem, Box, Text } from "@chakra-ui/react";

import { SongData, FeaturedSongs } from "../lib/song-data";

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
        Royale Lieder
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
    </Box>
  );
}
