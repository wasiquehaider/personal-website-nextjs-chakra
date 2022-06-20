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

export const GalleryItem = ({ id, title, description, cardImage }) => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      alignItems="center"
      justifyContent="flex-end"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="20em" w="full">
          <Box boxSize="full" shadow="md" borderWidth={1} flex="none">
            <Image
              src={cardImage}
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
              <Text fontSize="sm">Fahim Flower Arrangements vase</Text>
              <Text size="l" color={"white"} fontWeight="bold">
                AED 120.00
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
