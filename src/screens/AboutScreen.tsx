import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import ABOUT_IMAGE from "../assets/About.jpg";
import COLOR from "../constants/COLOR";

const AboutScreen = () => {
  const flexDirection1 = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      px={"20px"}
      py={"20px"}
      alignItems={"center"}
      bg={COLOR.LIGHT_CREAM}
    >
      <Heading size={"md"} mt={8} mb={8} fontWeight={"bold"}>
        ABOUT US
      </Heading>
      <Divider
        alignSelf={"center"}
        height={1}
        w={"100%"}
        backgroundColor={COLOR.BLUE}
      />

      <Flex
        flexDirection={flexDirection1}
        mt={"40px"}
        justifyContent={"center"}
        justifyItems={"center"}
        gap={20}
      >
        <Box display={"flex"} flex={1} justifyContent={"center"}>
          <Image src={ABOUT_IMAGE} height={450} w={450} />
        </Box>
        <Box
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack w={"60%"}>
            <Text>
              We are a professional and friendly team offering quality services
              in Sydney. We pride ourselves in providing clean windows with
              excellent customer service consistently We are a professional and
              friendly team offering quality services in Sydney. We pride
              ourselves in providing clean windows with excellent customer
              service consistently
            </Text>
            <Text>
              We are a professional and friendly team offering quality services
              in Sydney. We pride ourselves in providing clean windows with
              excellent customer service consistently We are a professional and
              friendly team offering quality services in Sydney. We pride
              ourselves in providing clean windows with excellent customer
              service consistently
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutScreen;
