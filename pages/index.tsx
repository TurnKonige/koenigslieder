import { List, ListItem, Box, Text } from "@chakra-ui/react";

import { SongData, Songs } from "../lib/song-data";

export default function Home() {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      backgroundColor="#E4E4E4"
      paddingX="5vw"
      paddingY="3vh"
    >
      <Text textAlign="center" as="h1" fontSize="2rem" marginBottom="5vh">
        Songs
      </Text>
      <List spacing={5}>
        {Songs.map((song: SongData) => (
          <ListItem
            boxShadow="md"
            p="6"
            rounded="md"
            backgroundColor="#FFF"
            textAlign="center"
            fontSize="1.2rem"
            width="100%"
            as="button"
            onClick={() => {}}
          >
            {song.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
