import {
  Stack,
  Box,
  Flex,
  Button,
  SimpleGrid,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  theme,
  chakra,
  Heading,
} from "@chakra-ui/react";

const BannerSection = ({ bgImage }) => {
  return (
    <Flex
      bg="purple.700"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      my={40}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
            alignItems={"center"}
          >
            <Heading color={"white"} fontSize={theme.fontSizes["2xl"]}>
              Art Ceramic
            </Heading>
            <Heading color={"white"} fontSize={theme.fontSizes["4xl"]}>
              and Pottery
            </Heading>
            <Text
              maxW={"50%"}
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="white"
              fontSize={{
                md: "sm",
              }}
            >
              Drawing on ceramic and Pottery artifacts is the art of high
              interest to Arab families and communities, symbolizing the ancient
              time our ancestors lived in the past and how they made their
              heritage. It's an art that gives the natural impression of our
              ances.
            </Text>
            <Stack direction={"row"}>
              <Box
                borderWidth={1}
                borderColor="pink.600"
                rounded={"full"}
                borderStyle="dashed"
                p={1}
              >
                <Button
                  w={"10em"}
                  bg={"pink.600"}
                  rounded={"full"}
                  color={"white"}
                  fontSize={theme.fontSizes["sm"]}
                  _hover={{ bg: "pink.300" }}
                >
                  View All Merchant
                </Button>
              </Box>
            </Stack>
          </Box>
          <Flex
            w="full"
            h="full"
            transform={"translateY(-6rem)"}
            justifyContent={"flex-end"}
          >
            <Image
              rounded={"3xl"}
              width={"50%"}
              objectFit={"cover"}
              src={"assets/section/sectionImage1.png"}
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          justifyContent={"end"}
          columns={{
            base: 1,
            md: 2,
          }}
          // mb={24}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <Heading color={"white"} fontSize={theme.fontSizes["2xl"]}>
              Art Ceramic
            </Heading>
            <Heading color={"white"} fontSize={theme.fontSizes["4xl"]}>
              and Pottery
            </Heading>
            <Text
              maxW={"50%"}
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="white"
              fontSize={{
                md: "sm",
              }}
            >
              Drawing on ceramic and Pottery artifacts is the art of high
              interest to Arab families and communities, symbolizing the ancient
              time our ancestors lived in the past and how they made their
              heritage. It's an art that gives the natural impression of our
              ances.
            </Text>
            <Stack direction={"row"}>
              <Box
                borderWidth={1}
                borderColor="pink.600"
                rounded={"full"}
                borderStyle="dashed"
                p={1}
              >
                <Button
                  w={"10em"}
                  bg={"pink.600"}
                  rounded={"full"}
                  color={"white"}
                  fontSize={theme.fontSizes["sm"]}
                  _hover={{ bg: "pink.300" }}
                >
                  View All Merchant
                </Button>
              </Box>
            </Stack>
          </Box>
          <Flex
            w="full"
            h="full"
            transform={"translateY(6rem)"}
            justifyContent={"flex-start"}
          >
            <Image
              rounded={"3xl"}
              width={"50%"}
              objectFit={"cover"}
              src={"assets/section/sectionImage1.png"}
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default BannerSection;
