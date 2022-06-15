import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  SimpleGrid,
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
      <SimpleGrid columns={[1, 2, 4, 6]} spacing={0}>
        {cards.map((item, index) => (
          <GalleryItem cardImage={item.cardImage} />
        ))}
      </SimpleGrid>
    </Layout>
    // <Container>
    //   <Head>
    //     <title>Home - Benjamin Carlson</title>
    //   </Head>
    //   <Stack
    //     as="main"
    //     spacing={8}
    //     justifyContent="center"
    //     alignItems="flex-start"
    //     m="0 auto 4rem auto"
    //     maxWidth="700px"
    //     px={2}
    //   >
    //     <Flex
    //       flexDirection="column"
    //       justifyContent="flex-start"
    //       alignItems="flex-start"
    //       maxWidth="700px"
    //     >
    //       <Heading mb={2}>Hi, I'm Benjamin Carlson</Heading>
    //       <Text color={colorSecondary[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.</Text>
    //       <Button data-splitbee-event="Button Click" data-splitbee-event-type="Resume">View Resume</Button>
    //     </Flex>
    //   </Stack>
    // </Container>
  );
}
