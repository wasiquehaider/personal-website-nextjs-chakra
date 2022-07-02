import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export default function CollectionItem({ item }) {
  return (
    <Center py={2}>
      <Box
        role={"group"}
        maxW={"330px"}
        height={"17rem"}
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
        <Stack width={"15rem"} p={5} align={"center"}>
          <Text fontSize={"xs"} textTransform={"uppercase"}>
            {item.title}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
