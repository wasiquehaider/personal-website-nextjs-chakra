import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar/index";

export default function Layout({ props, children }) {
  return (
    <>
      <Box>
        <NavBar />
        <Center>{children}</Center>
        <Stack>
          <Image
            width={"Full"}
            src="curve_image.png"
            alt="Woman paying for a purchase"
          />
          <Flex
            flex={1}
            // position={"absolute"}
            backgroundColor="red.400"
            alignItems={"center"}
            justifyContent="center"
            alignSelf={"center"}
          ></Flex>
        </Stack>
        <Footer />
      </Box>
    </>
  );
}
