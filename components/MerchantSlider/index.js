import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  ButtonGroup,
  IconButton,
  theme,
  Flex,
  Avatar,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import ProductItem from "../ProductItem";

export default function MerchantSlider() {
  return (
    <SimpleGrid
      alignItems="center"
      columns={{
        base: 1,
        md: 2,
      }}
    >
      <Box
        order={{
          base: "initial",
          md: 2,
        }}
        alignItems={"center"}
      >
        <Heading color={"black"} fontSize={theme.fontSizes["2xl"]}>
          Get to know our merchants
        </Heading>

        <Text
          mb={5}
          textAlign={{
            base: "center",
            sm: "left",
          }}
          color="gray.300"
          fontSize={{
            md: "sm",
          }}
        >
          We handpick every one of the businesses we work with for top product
          selection
        </Text>
        <Stack direction={"row"}>
          <Box borderWidth={1} borderColor="pink.500" rounded={"full"} p={1}>
            <Button
              w={"10em"}
              bg={"pink.500"}
              rounded={"full"}
              color={"white"}
              fontSize={theme.fontSizes["sm"]}
              _hover={{ bg: "pink.400" }}
            >
              View All Merchant
            </Button>
          </Box>
        </Stack>
        <Stack direction={"row"} my={"3rem"}>
          <Image
            boxSize="7rem"
            src={"assets/section/sectionImage1.png"}
            alt="Dan Abramov"
          />
          <Image
            boxSize="7rem"
            src={"assets/section/sectionImage1.png"}
            alt="Dan Abramov"
          />
          <Image
            boxSize="7rem"
            src={"assets/section/sectionImage1.png"}
            alt="Dan Abramov"
          />
        </Stack>
      </Box>
      <Flex w="full" h="full" padding={"3rem"}>
        <ProductItem
          item={{
            title: "Art Ceramic and Pottery (decoupage)",
            image: "assets/collection/collection1.png",
          }}
        />
      </Flex>
    </SimpleGrid>
  );
}
