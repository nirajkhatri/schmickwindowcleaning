import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const ContactScreen = () => {
  return (
    <Flex flexDirection={"column"} px={20} py={20} height={"100%"}>
      <Heading fontWeight={"bold"} textAlign={"center"}>
        WANT TO GET IN TOUCH ?
      </Heading>
      <Heading mt={10} fontWeight={"bold"} textAlign={"center"}>
        CONTACT US
      </Heading>
      <Flex flex={1} mt={10}>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Flex flexDir={"column"}>
            <Input />
            <Input />
            <Input />
            <Button>Contact Us</Button>
          </Flex>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Flex flexDir={"column"}>
            <Text>Ace</Text>
            <Text>Ace</Text>
            <Text>Ace</Text>
            <Text>Ace</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactScreen;
