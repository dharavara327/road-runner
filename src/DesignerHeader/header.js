"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react";
import { HiOutlinePencil } from "react-icons/hi2";
import { CgImport, CgExport } from "react-icons/cg";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrRevert, GrRedo } from "react-icons/gr";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../assets/scss/header.scss";
import LogoIcon from "../assets/images/logo.png";

const DesignHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header className="rr_top_header">
      <Box
        bg={useColorModeValue("white", "white")}
        boxShadow="md"
        px={6}
        py={2}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={20} alignItems={"center"}>
            <Flex gap="6" align="center">
              <Image src={LogoIcon} className="logo_image_small" />
              <Button
                size="sm"
                px="8"
                py={2}
                variant="solid"
                bg="#CA6CF7"
                color="white"
                fontWeight="400"
                _hover={{ bg: "#CA7CF7" }}
              >
                Pro
              </Button>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                fontWeight="500"
                fontSize="md"
                display="flex"
                alignItems="center"
                gap="3"
              >
                Untitled Blank Project <HiOutlinePencil size="22px" />
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} justifyContent="center">
            <Box display="flex" alignItems="center" gap={5}>
              <GrRevert size="28px" />
              <GrRedo size="32px" color="#d9d9d9" />
            </Box>
            <Box
              display="flex"
              px="6"
              alignItems="center"
              borderLeft="2px"
              borderRight="2px"
              borderColor="#D9D9D9"
              mx="8"
            >
              <Box cursor="pointer">
                <FaMinus />
              </Box>
              <Box as="span" fontSize="14px" fontWeight="500" mx="6">
                46%
              </Box>
              <Box cursor="pointer">
                <FaPlus />
              </Box>
            </Box>
            <Box className="rr_top_icons" display="flex" gap="5" marginEnd="12">
              <Box display="flex" flexDirection="column" alignItems="center">
                <CgExport size="18px" />
                <Box as="label" fontSize="14px" fontWeight="500">
                  Share
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <CgExport size="18px" style={{ transform: "rotate(180deg)" }} />
                <Box as="label" fontSize="14px" fontWeight="500">
                  Export
                </Box>
              </Box>
            </Box>
            <Button
              size="sm"
              px="5"
              py="4"
              variant="solid"
              bgColor="#CA6CF7"
              color="white"
              fontWeight="500"
              _hover={{ bg: "#CA7CF7" }}
            >
              Preview
            </Button>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};
export default DesignHeader;
