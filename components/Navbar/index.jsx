import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { BiLogIn } from "react-icons/bi";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { theme } from "@chakra-ui/react";

// const Links = ["Home", "Shop", "Merchants", "About Us", "Blogs", "Contact"];
const Links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Merchants",
    href: "/merchants",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const NavLink = ({ children, href }) => (
  <Link
    color="white"
    fontSize={theme.fontSizes["xs"]}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("purple.700")} px={4}>
      <Container maxW="7xl">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text color={"white"} fontWeight="bold">
                Logo
              </Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ButtonGroup spacing={"0"}>
              <IconButton
                backgroundColor={"transparent"}
                color={"white"}
                fontSize={theme.fontSizes["xs"]}
                aria-label="Search database"
                icon={<FiSearch />}
              />
              <IconButton
                backgroundColor={"transparent"}
                color={"white"}
                fontSize={theme.fontSizes["xs"]}
                aria-label="Search database"
                icon={<FiHeart />}
              />
              <IconButton
                backgroundColor={"transparent"}
                color={"white"}
                fontSize={theme.fontSizes["xs"]}
                aria-label="Search database"
                icon={<FiShoppingCart />}
              />
            </ButtonGroup>
            <Button
              _hover={{ bg: "transparent" }}
              _active={{
                bg: "#dddfe2",
                transform: "scale(0.98)",
                borderColor: "#bec3c9",
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              color="white"
              leftIcon={<BiLogIn />}
              backgroundColor="transparent"
              fontSize={theme.fontSizes["xs"]}
            >
              Login / Register
            </Button>
          </Flex>
        </Flex>
      </Container>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
