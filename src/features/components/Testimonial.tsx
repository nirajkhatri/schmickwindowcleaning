import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Flex
      flexDirection={"column"}
      height={"100%"}
      px={40}
      py={20}
      alignItems={"center"}
    >
      <Heading fontWeight={"bold"}>TESTIMONIALS</Heading>
      <Heading mt={10} fontWeight={"bold"}>
        SHINY WINDOWS - HAPPY CLIENTS
      </Heading>

      <Flex mt={30} gap={10}>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>
              We are very happy to with Shiny Windows service. They were
              professional, easy to deal with and delivered what they promised.
              We are happy to recommend them.
            </Text>
          </CardBody>
        </Card>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>
              We are very happy to with Shiny Windows service. They were
              professional, easy to deal with and delivered what they promised.
              We are happy to recommend them.
            </Text>
          </CardBody>
        </Card>
        <Card
          style={{
            border: "1px solid green",
            padding: 10,
          }}
        >
          <CardBody>
            <Text>
              We are very happy to with Shiny Windows service. They were
              professional, easy to deal with and delivered what they promised.
              We are happy to recommend them.
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Testimonial;
