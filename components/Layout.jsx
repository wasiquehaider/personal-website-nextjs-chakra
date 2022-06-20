import { Box, Center } from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import NavBar3 from "./NavBar3";

export default function Layout({ props, children }) {
  return (
    <>
      <Box>
        <NavBar3 />
        {/* <Center  bg={useColorModeValue('gray.50', 'gray.800')}> */}
        <Center>{children}</Center>
        <Footer />
      </Box>
    </>
  );
}
