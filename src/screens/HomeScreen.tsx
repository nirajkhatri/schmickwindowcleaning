import { Button, Flex, Heading } from "@chakra-ui/react";
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
      alignItems={"center"}
      flex={1}
      height={"100%"}
      justifyContent={"center"}
    >
      <Flex
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        gap={35}
        padding={20}
        color={COLOR.BLUE}
        textAlign={"center"}
        w={"100%"}
      >
        <Heading size={"md"} fontWeight={"bold"}>
          BEST GLASS AND COMMERCIAL CLEANING SERVICE
        </Heading>
        <Heading
          letterSpacing={"wider"}
          size={"md"}
          width={{ base: "100%", md: "60%" }}
        >
          We offer the leading commercial cleaning services in Sydney: real
          people, delivering real results.
        </Heading>
        <Heading size={"md"}>CALL US TODAY - 0431 381 925</Heading>
        <Heading size={"md"}></Heading>
        <Button
          style={{
            padding: "10px",
            border: "none",
            cursor: "pointer",
            backgroundColor: COLOR.DARK_CREAM,
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Our Services
        </Button>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
