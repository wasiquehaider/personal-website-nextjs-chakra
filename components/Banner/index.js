import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  theme,
} from "@chakra-ui/react";

const Banner = ({ bgImage }) => {
  return (
    <Flex
      w={"full"}
      h={"40vh"}
      backgroundImage={bgImage}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={useBreakpointValue({ base: "l", md: "md", sm: "sm" })}
          align={"center"}
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
          >
            About Us
          </Text>
          <Text
            textAlign={"center"}
            color={"white"}
            fontWeight={theme.fontWeights["light"]}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "sm", md: "md" })}
          >
            The Kamui Store is an artistic marketplace that shares the exclusive
            desire for hand-made artistic goods
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
                Load more
              </Button>
            </Box>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Banner;
