import { Box, Link, Text, IconButton, Tooltip } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer: React.FC<{}> = () => {
  return (
    <Box
      width="100vw"
      paddingX="5vw"
      paddingY="2vh"
      backgroundColor="#D4D4D4" 
      marginTop="3vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color='#646464'>
        Created by{" "}
        <Link color="teal.500" href="https://www.linkedin.com/in/robert-f-0b87a218a/">
          Robert Fuchs
        </Link>
      </Text>
      <NextLink href="https://github.com/Treborium/koenigslieder">
        <AiFillGithub size="1.5rem" aria-label="view source code on GitHub" color='#646464'/>
      </NextLink>
    </Box>
  );
};
