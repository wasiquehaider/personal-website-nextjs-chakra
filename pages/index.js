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
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image1.png",
    },
    {
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image2.png",
    },
    {
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image3.png",
    },
    {
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image4.png",
    },
    {
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image5.png",
    },
    {
      title: "Fahim Flower Arrangement Vase",
      price: "AED 120.00",
      image: "assets/image1.png",
    },
  ];
  return (
    <Layout>
      <SimpleGrid columns={[1, 2, 4, 5]} spacing={0}>
        {cards.map((item, index) => (
          <GalleryItem item={item} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
