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
  VStack,
  theme,
  Show,
  Hide,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import { GalleryItem } from "../components/GalleryItem";
import CollectionItem from "../components/CollectionItem";
import ProductItem from "../components/ProductItem";
import MerchantSlider from "../components/MerchantSlider";

import { cards, collections } from "../data/mockData";
import BannerSection from "../components/BannerSection";
import ResponsiveCarousel from "../components/Carousel";

export default function Index() {
  return (
    <Layout>
      <VStack>
        {/* <Hide above="md">
          <ResponsiveCarousel />
        </Hide> */}

        <Stack>
          <SimpleGrid columns={[1, 2, 4, 5]} spacing={0}>
            {cards.map((item, index) => (
              <GalleryItem key={index} item={item} />
            ))}
          </SimpleGrid>
        </Stack>

        <Stack my={20}>
          <Heading
            textAlign={"center"}
            size="lg"
            fontWeight={theme.fontWeights["extrabold"]}
          >
            Browse By Collection
          </Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={10}>
            {collections.map((item, index) => (
              <CollectionItem key={index} item={item} />
            ))}
          </SimpleGrid>
        </Stack>
        <Stack>
          <Heading
            textAlign={"center"}
            size="lg"
            fontWeight={theme.fontWeights["extrabold"]}
          >
            Explore our best-selling products
          </Heading>
          <SimpleGrid columns={[1, 2, 4]} spacing={10}>
            {collections.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </SimpleGrid>
        </Stack>
        <Stack>
          <BannerSection />
        </Stack>
        <Flex width={"3xl"} display={{ base: "none", md: "flex" }}>
          <MerchantSlider />
        </Flex>
      </VStack>
    </Layout>
  );
}
