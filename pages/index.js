import Head from "next/head";
import {
  useColorMode,
  HStack,
  Heading,
  Box,
  Text,
  Flex,
  Stack,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import Container from "../components/Container";
import Layout from "../components/Layout";
import { GalleryItem } from "../components/GalleryItem";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  const cards = [
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
    {
      cardImage:
        "https://i.picsum.photos/id/692/200/200.jpg?hmac=PBAPILlS_qaKe0OMYjT0eXnftJjTGdwOgqCQMUVDGbg",
    },
  ];
  return (
    <Layout>
      <SimpleGrid columns={[1, 2, 4, 5]} spacing={0}>
        {cards.map((item, index) => (
          <GalleryItem cardImage={item.cardImage} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
