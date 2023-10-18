"use client";

import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { HiPlus } from "react-icons/hi2";
import Box1 from "../../assets/images/brand.png";
import Box2 from "../../assets/images/candy.png";
import Box3 from "../../assets/images/retrofit.png";

const BannerCmp = () => {
  return (
    <Grid   templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr", '2xl': "1fr 1fr 1fr 1fr" }} gap={6} px={6} mt={10} mb={10}>
      <GridItem w="100%">
        <Card
          borderColor={"#EFF3FE"}
          borderWidth={1}
          shadow={"none"}
          boxShadow={"0px 0px 15px 0px rgba(112, 112, 112, 0.10);"}
        >
          <CardBody>
            <Flex justifyContent={"space-between"} mb={5}>
              <Text fontSize={"18px"} fontWeight={500} color={"#000"}>
                Brandish
              </Text>
              <Box cursor={"pointer"}>
                <Menu>
                  <MenuButton>
                    <BsThreeDots size="24px" color="#B8C1D9" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
            <Box
              width="100%"
              height={"190px"}
              bg={useColorModeValue("#F1F6F9", "#F1F6F9")}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"xl"}
            >
              <Image src={Box1} width={240} />
            </Box>
            <Flex mt="6" gap={3}>
              <Box
                bg={useColorModeValue("#7AB5DA", "#7AB5DA")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#7577E6", "#7577E6")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#C294D6", "#C294D6")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#D47A97", "#D47A97")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderColor={"#EFF3FE"}
          borderWidth={1}
          shadow={"none"}
          boxShadow={"0px 0px 15px 0px rgba(112, 112, 112, 0.10);"}
        >
          <CardBody>
            <Flex justifyContent={"space-between"} mb={5}>
              <Text fontSize={"18px"} fontWeight={500} color={"#000"}>
                Candy Lime
              </Text>
              <Box cursor={"pointer"}>
                <Menu>
                  <MenuButton>
                    <BsThreeDots size="24px" color="#B8C1D9" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
            <Box
              width="100%"
              height={"190px"}
              bg={useColorModeValue("#F1F6F9", "#F1F6F9")}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"xl"}
            >
              <Image src={Box2} width={200} />
            </Box>
            <Flex mt="6" gap={3}>
              <Box
                bgGradient="linear-gradient(0deg, #8CB7D0 0%, #95D5DA 100%);"
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bgGradient="linear-gradient(0deg, #9586BC 0%, #9FA7C1 100%);"
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bgGradient="linear-gradient(0deg, #9F85B6 0%, #DB938C 100%);"
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bgGradient="linear-gradient(0deg, #323265 0%, #343265 100%);"
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bgGradient="linear-gradient(180deg, #97D3D1 0%, #97D4D1 100%);"
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderColor={"#EFF3FE"}
          borderWidth={1}
          shadow={"none"}
          boxShadow={"0px 0px 15px 0px rgba(112, 112, 112, 0.10);"}
        >
          <CardBody>
            <Flex justifyContent={"space-between"} mb={5}>
              <Text fontSize={"18px"} fontWeight={500} color={"#000"}>
                RetroFit
              </Text>
              <Box cursor={"pointer"}>
                <Menu>
                  <MenuButton>
                    <BsThreeDots size="24px" color="#B8C1D9" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
            <Box
              width="100%"
              height={"190px"}
              bg={useColorModeValue("#F1F6F9", "#F1F6F9")}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"xl"}
            >
              <Image src={Box3} width={220} />
            </Box>
            <Flex mt="6" gap={3}>
              <Box
                bg={useColorModeValue("#EC8A5C", "#EC8A5C")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#B5D3D2", "#B5D3D2")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#F4B070", "#F4B070")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
              <Box
                bg={useColorModeValue("#323236", "#323236")}
                width={"45px"}
                height={"45px"}
                borderRadius={"30px"}
                cursor={"pointer"}
              ></Box>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem w="100%">
        <Card
          borderColor={"#EFF3FE"}
          borderWidth={1}
          shadow={"none"}
          minHeight={348}
          bg={"#FBFBFB"}
          _hover={{
            bg: "#f1f1f1",
            transition: "background-color 0.3s ease-in-out",
          }}
          h={"100%"}
          cursor={"pointer"}
          transition={"all 0.5 ease"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={"0px 0px 15px 0px rgba(112, 112, 112, 0.10);"}
        >
          <Box>
            <HiPlus size={"120px"} color="#CBB3DC" fontWeight={300} />

            <Text fontSize={20} fontFamily={"Poppins"} fontWeight={500}>
              Add a Brand
            </Text>
          </Box>
        </Card>
      </GridItem>
    </Grid>
  );
};
export default BannerCmp;
