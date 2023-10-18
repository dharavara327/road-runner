"use client";

import {
  Box,
  Flex, 
  useColorModeValue,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
 
import { FiSearch } from "react-icons/fi";

const LayoutHeader = () => {
  return (
    <header className="rr_top_header">
      <Box bg={useColorModeValue("white", "white")} px={6} py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} gap="6">
            <Flex gap="6" align="center">
              <Text fontSize={{base: '2xl' , xl: '5xl'}} fontWeight="600" fontFamily="Poppins" cursor={'pointer'}>
                Brands
              </Text>
            </Flex>

          <Box  className="search-block">
            <InputGroup>
              <Input
                type="tel"
                placeholder="Search Brands"
                pl={4}
                py={5}
                borderColor={"#EFF3FE"}
              />
              <InputLeftElement className="icon_right">
                <FiSearch color="#999999" size={18} />
              </InputLeftElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
    </header>
  );
};
export default LayoutHeader;
