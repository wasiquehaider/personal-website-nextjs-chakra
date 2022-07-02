import React from "react";
import {
  Flex,
  Link,
  Box,
  Image,
  Badge,
  Button,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

export const GalleryItem = ({ item }) => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      alignItems="center"
      justifyContent="flex-end"
      marginBottom={"1.5rem"}
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="20em" w="full">
          <Box boxSize="full" shadow="md" flex="none">
            <Image
              src={item.image}
              alt="carousel image"
              boxSize="full"
              backgroundSize="cover"
            />
            <Stack
              p="0.5rem 1rem"
              pos="absolute"
              bottom="1rem"
              w="full"
              color="white"
            >
              <Text
                fontSize="sm"
                fontWeight={theme.fontWeights["bold"]}
                width="50%"
              >
                {item.title}
              </Text>
              <Text
                size="l"
                color={"white"}
                fontWeight={theme.fontWeights["extrabold"]}
              >
                {item.price}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
