import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";

const ServiceScreen = () => {
  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      px={40}
      py={20}
      alignItems={"center"}
    >
      <Heading fontWeight={"bold"}>OUR SERVICES</Heading>
      <Heading mt={10} fontWeight={"bold"}>
        WHAT WE OFFER
      </Heading>

      <Flex mt={30} gap={10}>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>Commercial window cleaning</Text>
          </CardBody>
        </Card>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>Residential window cleaning</Text>
          </CardBody>
        </Card>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>Solar Panels Cleaning & Pressure Washing</Text>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default ServiceScreen;
