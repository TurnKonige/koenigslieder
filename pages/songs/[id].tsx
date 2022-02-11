import { SongData, Songs } from "../../lib/song-data";

import { Text, Box, IconButton } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

import { BiArrowBack } from "react-icons/bi";
import NextLink from "next/link";

export interface SongProps {
  song: SongData | null;
}

export default function Song(props: SongProps) {
  const renderSong = () => {
    return (
      <>
        <Text as="h1" fontSize="1.5rem" paddingBottom="2vh" textAlign="center">
          {props.song.title.toUpperCase()}
        </Text>
        <Text whiteSpace="pre-line">{props.song.lyrics}</Text>
      </>
    );
  };

  const renderError = () => {
    return (
      <Box>
        <Text
          as="h1"
          fontSize="2rem"
          textAlign="center"
          color="red"
          marginTop="15vh"
        >
          Nichts gefunden
        </Text>
        <Text
          as="h1"
          fontSize="3rem"
          textAlign="center"
          color="red"
          marginTop="5vh"
        >
          ¯\_(ツ)_/¯
        </Text>
      </Box>
    );
  };

  return (
    <Box paddingX="5vw" paddingY="2vh">
      <NextLink href="/" passHref>
        <IconButton
          icon={<BiArrowBack />}
          aria-label="navigate back"
          variant="outline"
        />
      </NextLink>
      {props.song ? renderSong() : renderError()}
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const song = Songs.find(
    (s) => s.title.toLowerCase() === (id as string).toLowerCase()
  );

  return {
    props: {
      song: song || null,
    },
  };
};
