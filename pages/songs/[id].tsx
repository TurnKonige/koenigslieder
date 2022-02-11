import { useRouter } from "next/router";
import { SongData, Songs } from "../../lib/song-data";

import { Text, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

export interface SongProps {
  song: SongData;
}

export default function Song(props: SongProps) {
  return (
    <Box paddingX="5vw" paddingY="2vh">
      <Text as="h1" fontSize="1.5rem" paddingBottom="2vh" textAlign="center">
        {props.song.title.toUpperCase()}
      </Text>
      <Text whiteSpace="pre-line">
        {props.song.lyrics}
      </Text>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const song = Songs.find((s) => s.title.toLowerCase() === (id as string).toLowerCase());

  return {
    props: {
      song,
    }
  };
};
