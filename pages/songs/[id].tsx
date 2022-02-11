import { useRouter } from "next/router";
import { Songs } from "../../lib/song-data";

import { Text, Box } from "@chakra-ui/react";

export default function Song() {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <Box paddingX="5vw" paddingY="2vh">
      <Text as="h1" fontSize="1.5rem" paddingBottom="2vh" textAlign="center">
        {id.toUpperCase()}
      </Text>
      <Text whiteSpace="pre-line">
        {Songs.find((s) => s.title.toLowerCase() === id).lyrics}
      </Text>
    </Box>
  );
}
