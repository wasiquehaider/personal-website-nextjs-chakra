import { Box, Center, Image, Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar/index";

export default function Layout({ props, children }) {
  return (
    <>
      <Box>
        <NavBar />
        {/* <Center  bg={useColorModeValue('gray.50', 'gray.800')}> */}
        <Center>{children}</Center>
        <Stack>
          <Image
            width={"Full"}
            src="curve_image.png"
            alt="Woman paying for a purchase"
          />
        </Stack>
        <Footer />
      </Box>
    </>
  );
}
