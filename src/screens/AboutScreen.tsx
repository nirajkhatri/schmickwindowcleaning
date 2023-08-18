import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import HERO_IMAGE from "../assets/Hero.jpg";

const AboutScreen = () => {
  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      px={40}
      py={20}
      alignItems={"center"}
    >
      <Heading fontWeight={"bold"}>GET TO KNOW US</Heading>
      <Heading mt={10} fontWeight={"bold"}>
        ABOUT SHINY WINDOWS
      </Heading>

      <Flex mt={30} justifyContent={"center"} gap={100}>
        <Box flex={1}>
          <Image src={HERO_IMAGE} height={500} w={500} />
        </Box>
        <VStack flex={1} w={"50%"}>
          <Text>
            We are a professional and friendly team offering quality services in
            Sydney. We pride ourselves in providing clean windows with excellent
            customer service consistently
          </Text>
          <VStack>
            <Text>
              We are a professional and friendly team offering quality services
              in Sydney. We pride ourselves in providing clean windows with
              excellent customer service consistently
            </Text>
            <Text>
              We are a professional and friendly team offering quality services
              in Sydney. We pride ourselves in providing clean windows with
              excellent customer service consistently
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AboutScreen;
