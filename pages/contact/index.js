import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";

import Layout from "../../components/Layout";

export default function Index() {
  return (
    <Layout>
      <Heading>This is the Contact Page</Heading>
    </Layout>
  );
}
