import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  theme,
  Image,
  Container,
} from "@chakra-ui/react";

const AdBanner = ({ bgImage }) => {
  return (
    <Flex
      w={"full"}
      h={"60vh"}
      my={12}
      position="relative"
      overflow="hidden"
      z-index={1}
      _before={{
        content: '""',
        position: "absolute",
        width: "100%",
        height: "10%",
        backgroundColor: "white",
        borderRadius: "45%",
        left: "0",
        top: "-6%",
        zIndex: "2",
      }}
      _after={{
        content: '""',
        position: "absolute",
        width: "100%",
        height: "10%",
        backgroundColor: "white",
        borderRadius: "45%",
        left: "0",
        bottom: "-6%",
        zIndex: "2",
      }}
      backgroundColor={"purple.700"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        alignItems={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Container maxW={"6xl"}>
          <Stack
            maxW={useBreakpointValue({ base: "l", md: "md", sm: "sm" })}
            align={"flex-start"}
          >
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
            >
              Sell your products at Kamui Store
            </Text>
            <Text
              color={"white"}
              fontWeight={theme.fontWeights["light"]}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "sm", md: "md" })}
            >
              We believe in supporting small creative businesses across the
              region to sell their goods in the UAE Market
            </Text>
            <Stack direction={"row"}>
              <Box
                borderWidth={1}
                borderColor="pink.600"
                rounded={"full"}
                borderStyle="dashed"
                p={1}
                my={5}
              >
                <Button
                  w={"10em"}
                  bg={"pink.600"}
                  rounded={"full"}
                  color={"white"}
                  fontSize={theme.fontSizes["sm"]}
                  _hover={{ bg: "pink.300" }}
                >
                  Apply Now
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </VStack>
    </Flex>
  );
};

export default AdBanner;
