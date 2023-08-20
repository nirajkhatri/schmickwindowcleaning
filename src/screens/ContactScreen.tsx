import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import COLOR from "../constants/COLOR";

const ContactScreen = () => {
  const flexDirection1 = useBreakpointValue({ base: "column", md: "row" });
  const alignDIr = useBreakpointValue({ base: "center", md: "inherit" });
  const widthDir = useBreakpointValue({ base: "100%", md: "50%" });
  const marginDir = useBreakpointValue({ base: "20px", md: "0" });

  const btnDir = useBreakpointValue({ base: "flex-start", md: "flex-start" });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      bg={COLOR.LIGHT_CREAM}
      flexDirection={"column"}
      px={"40px"}
      py={"40px"}
      height={"100%"}
    >
      <Box>
        <Heading size={"md"} mb={4} fontWeight={"bold"} textAlign={"center"}>
          CONTACT US
        </Heading>
        <Divider height={1} w={"100%"} backgroundColor={COLOR.BLUE} />
      </Box>

      <Flex
        flexDirection={flexDirection1 as any}
        flex={1}
        mt={isMobile ? 10 : 20}
      >
        <Flex
          flex={1}
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={10}
        >
          <Flex
            width={"100%"}
            flexDir={"column"}
            alignItems={isMobile ? "flex-start" : "center"}
          >
            <Heading size={"md"}>Our Address</Heading>
            <Divider
              my={2}
              height={"0.5"}
              w={"40%"}
              backgroundColor={COLOR.BLUE}
            />
            <Text mb={1} fontSize={isMobile ? "md" : "20px"}>
              Address 45, Bathurst street{" "}
            </Text>
            <Text fontSize={isMobile ? "md" : "20px"}>
              Liverpool, Australia
            </Text>
          </Flex>
          <Flex
            w="100%"
            flexDir={"column"}
            alignItems={isMobile ? "flex-start" : "center"}
          >
            <Heading size={"md"}>Contact Info.</Heading>
            <Divider
              my={2}
              height={"0.5"}
              w={"40%"}
              backgroundColor={COLOR.BLUE}
            />
            <Text mb={1} fontSize={isMobile ? "md" : "20px"}>
              Email : deepsonbhusal@gmail.com
            </Text>
            <Text fontSize={isMobile ? "md" : "20px"}>
              Phone No. : 048-127-2316
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1} flexDirection={"column"}>
          <Box
            marginTop={marginDir}
            display={"flex"}
            flexDirection={"column"}
            alignItems={alignDIr}
            gap={10}
          >
            <Box w={widthDir}>
              <FormLabel mb={1}>Name</FormLabel>
              <Input
                variant={"outlined"}
                p={5}
                size={"sm"}
                border={"none"}
                placeholder="Enter Name"
              />
            </Box>
            <Box w={widthDir}>
              <FormLabel mb={1}>Email</FormLabel>
              <Input
                variant={"outlined"}
                p={5}
                size={"sm"}
                border={"none"}
                placeholder="Enter Email"
              />
            </Box>
            <Box w={widthDir}>
              <FormLabel mb={1}>Message</FormLabel>
              <Input
                variant={"outlined"}
                p={5}
                size={"sm"}
                border={"none"}
                placeholder="Enter Message"
              />
            </Box>
            <Button
              border={"none"}
              bg={COLOR.BLUE}
              textColor={"white"}
              cursor={"pointer"}
              alignSelf={btnDir}
            >
              Contact Us
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactScreen;
