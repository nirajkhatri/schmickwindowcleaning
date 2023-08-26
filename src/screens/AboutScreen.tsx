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
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      id="about"
      flexDirection={"column"}
      height={"100%"}
      px={"40px"}
      py={"40px"}
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
        flexDirection={flexDirection1 as any}
        mt={20}
        mb={20}
        justifyContent={"center"}
        justifyItems={"center"}
        gap={20}
      >
        <Box display={"flex"} justifyContent={"flex-end"} flex={1}>
          <Image src={ABOUT_IMAGE} height={isMobile ? 300 : 450} w={450} />
        </Box>
        <Box display={"flex"} flex={1}>
          <VStack w={isMobile ? "100%" : "80%"}>
            <Text>
              With over 5 years in the glass and commercial cleaning industry,
              Schmick Glass And Window Cleaning provide a professional service
              for all Residential homes, commercial Showrooms and Industrial
              Properties.We are a professional and friendly team offering
              quality services in Sydney. We pride ourselves in providing clean
              windows with excellent customer service consistently.
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutScreen;
