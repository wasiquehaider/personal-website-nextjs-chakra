import { Box, Center } from "@chakra-ui/react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export default function Layout({ children }) {
  return (
    <>
      <Box>
        <NavBar2 />
        {/* <Center  bg={useColorModeValue('gray.50', 'gray.800')}> */}
        <Center>{children}</Center>
      </Box>
    </>
  );
}
