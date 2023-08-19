import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import COLOR from "../constants/COLOR";
import { BsBook } from "react-icons/bs";

const ServiceScreen = () => {
  const flexDirection1 = useBreakpointValue({ base: "column", md: "row" });
  const width1 = useBreakpointValue({ base: "100%", md: "60%" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      px={"40px"}
      py={"20px"}
      alignItems={"center"}
      bg={COLOR.LIGHT_CREAM}
    >
      <VStack w={width1} textAlign={"center"} gap={30}>
        <Heading fontSize={"lg"} fontWeight={"bold"}>
          OUR SERVICE
        </Heading>
        <Divider
          alignSelf={"center"}
          height={1}
          w={"100%"}
          backgroundColor={COLOR.BLUE}
        />

        <Heading size={isMobile ? "md" : "lg"} fontWeight={"bold"}>
          We’re Dedicated Cleaners, Passionate About Achieving A Great Result
        </Heading>
        <Text>
          We want to show you that we care as much about your environment as you
          do. We don’t operate just as cleaners — it’s our aim to become a
          trusted and valued partner to your organisation, no matter where you
          are on the business spectrum.
        </Text>
        <Text>
          We know that every commercial space has its own unique cleaning needs,
          which is why every cleaning solution and service package is customised
          to your space. Our commercial cleaners in Sydney can tackle the
          challenges of any environment, whether it’s an office, warehouse, or
          school. Here are just a few of the services we offer:
        </Text>
      </VStack>
      <Flex
        flex={1}
        w={"100%"}
        mt={"100px"}
        mb={"100px"}
        justifyContent={"space-evenly"}
        gap={10}
        flexDirection={flexDirection1 as any}
      >
        <Card
          borderRadius={10}
          style={{
            padding: "20px",
          }}
          display={"flex"}
          textAlign={"center"}
        >
          <Box
            style={{
              padding: "10px",
              borderRadius: 20,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor: COLOR.DARK_CREAM,
            }}
          >
            <BsBook size={24} color={COLOR.BLUE} />
          </Box>
          <CardHeader>
            <Heading size={"sm"}>School Cleaning</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              We're specialists in cleaning primary schools and high school
            </Text>
          </CardBody>
        </Card>
        <Card
          borderRadius={10}
          style={{
            padding: "20px",
          }}
          display={"flex"}
          textAlign={"center"}
        >
          <Box
            style={{
              padding: "10px",
              borderRadius: 20,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor: COLOR.DARK_CREAM,
            }}
          >
            <BsBook size={24} color={COLOR.BLUE} />
          </Box>
          <CardHeader>
            <Heading size={"sm"}>Office Cleaning</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              We take care of cleanliness and hygiene, so your team doesn't have
              to!
            </Text>
          </CardBody>
        </Card>
        <Card
          borderRadius={10}
          style={{
            padding: "20px",
          }}
          display={"flex"}
          textAlign={"center"}
        >
          <Box
            style={{
              backgroundColor: COLOR.DARK_CREAM,
              padding: "10px",
              borderRadius: 20,
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BsBook size={24} color={COLOR.BLUE} />
          </Box>
          <CardHeader>
            <Heading size={"sm"}>Deep Cleaning</Heading>
          </CardHeader>
          <CardBody>
            <Text>We offer clients deep and facility maintenance programs</Text>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default ServiceScreen;
