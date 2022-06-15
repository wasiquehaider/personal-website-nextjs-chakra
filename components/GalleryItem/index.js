import React from "react";
import { Box, Image, Badge, Button, Heading, Text } from "@chakra-ui/react";

export const GalleryItem = ({ id, title, description, cardImage }) => {
  return (
    <Box onClick={console.log("item pressed")} borderWidth={1} as="article">
      <Image
        h="350px"
        objectFit="fill"
        w="100%"
        src={cardImage}
        alt="stock image"
      />
      <Box
        position={"relative"}
        backgroundColor={"rgba(0,0,0,0.5)"}
        // top={"50%"}
        bottom={0}
      >
        <Text fontSize={"sm"} color={"white"} noOfLines={2} width={"50%"}>
          Fahim Flower Arrangements vase
        </Text>
        <Heading size="l" color={"white"} fontWeight="bold">
          AED 120.00
        </Heading>
      </Box>
    </Box>
  );
};
