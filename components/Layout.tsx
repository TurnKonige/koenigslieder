import { Box } from "@chakra-ui/react";

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Box width="100vw" minHeight="100vh" backgroundColor="#F4F4F4">
      {children}
    </Box>
  );
};
