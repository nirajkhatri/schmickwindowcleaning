import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HERO_IMAGE from "../assets/Hero.jpg";
import COLOR from "../constants/COLOR";
const HomeScreen = () => {
  return (
    <Flex
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
      }}
      backgroundSize="cover"
      backgroundPosition="center"
      px={40}
      alignItems={"center"}
      flex={1}
      height={"100%"}
      justifyContent={"center"}
    >
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap={20}
        padding={20}
        color={"white"}
        textAlign={"center"}
      >
        <Heading fontWeight={"bold"}>BEST CLEANING SERVICE</Heading>
        <Heading as={"h1"}>
          Professional window cleaning service you can trust
        </Heading>
        <Button
          style={{
            padding: 10,
            border: "none",
            cursor: "pointer",
            backgroundColor: COLOR.BLUE,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Our Services
        </Button>
        <Heading>CALL US TODAY</Heading>
        <Heading>0431 381 925</Heading>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
