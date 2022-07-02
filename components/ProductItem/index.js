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
} from "@chakra-ui/react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function ProductItem({ item }) {
  return (
    <Center py={2}>
      <Box
        role={"group"}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"3xl"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} pos={"relative"}>
          <Image
            rounded={"3xl"}
            width={"15rem"}
            height={"12rem"}
            objectFit={"cover"}
            src={item.image}
          />
        </Box>
        <Flex justify={"flex-start"} position="absolute" top={"50%"} left={5}>
          <Avatar
            size={"md"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>
        <Stack width={"15rem"}>
          <ButtonGroup justifyContent="flex-end">
            <IconButton
              backgroundColor={"transparent"}
              color={"black"}
              fontSize={theme.fontSizes["xs"]}
              aria-label="Search database"
              icon={<FiShoppingCart />}
            />
            <IconButton
              backgroundColor={"transparent"}
              color={"black"}
              fontSize={theme.fontSizes["xs"]}
              aria-label="Search database"
              icon={<FiHeart />}
            />
          </ButtonGroup>
          <Box px={5} py={2}>
            <Text fontSize={"sm"} color="purple.800">
              Big Capacity Colorful
            </Text>
            <Text fontSize={"xs"} color="gray.300" textTransform={"uppercase"}>
              The artist Sabbo
            </Text>
            <Text
              fontSize={"xs"}
              color="purple.800"
              as="i"
              textTransform={"uppercase"}
            >
              AED 50.00
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}
