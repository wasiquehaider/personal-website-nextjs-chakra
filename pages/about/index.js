import Head from "next/head";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Box,
  Text,
  Stack,
  theme,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";

export default function Index() {
  return (
    <Layout>
      <VStack>
        <Banner bgImage={"url(assets/banners/about.png)"} />
        <Stack>
          <SimpleGrid
            columns={{ base: 1, md: 3, sm: 1 }}
            spacing={10}
            p={useBreakpointValue({ base: 20, md: 20, sm: 10 })}
          >
            <Flex justify="center">
              <Image
                height={"20rem"}
                rounded={"2xl"}
                alt={"feature image"}
                src={"assets/about/1.png"}
                objectFit={"cover"}
              />
            </Flex>
            <Box p={5}>
              <Text
                w={"50%"}
                fontSize={(theme.fontSizes = "lg")}
                fontWeight={theme.fontWeights["bold"]}
              >
                A Unique Online Art Marketplace
              </Text>
              <Text
                my={5}
                fontSize={(theme.fontSizes = "sm")}
                fontWeight={theme.fontWeights["light"]}
              >
                The Kamui Store is an online artistic community. Whether you’re
                a maker, a merchant of unique hand-made products or a lover of
                the hard to find, The Kamui Store is a place where you can
                connect, interact and shop from people with the common interest
                of a l
              </Text>
              <Text
                as="i"
                fontSize={useBreakpointValue({
                  base: theme.fontSizes["sm"],
                  sm: theme.fontSizes["lg"],
                })}
                fontWeight={theme.fontWeights["medium"]}
                backgroundColor={"pink.200"}
                color={"pink.500"}
                display="inline"
                rounded={"full"}
                p={1}
              >
                Be inspired. Be artistic. Join us.
              </Text>
            </Box>
            <Flex justify="center">
              <Image
                height={"20rem"}
                rounded={"2xl"}
                alt={"feature image"}
                src={"assets/about/2.png"}
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
        </Stack>
      </VStack>
    </Layout>
  );
}
