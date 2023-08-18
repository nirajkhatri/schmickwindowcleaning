import { Flex, Heading } from "@chakra-ui/react";
import COLOR from "../../constants/COLOR";

const Footer = () => {
  return (
    <Flex
      bg={COLOR.LIGHT_CREAM}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading as={"h3"}>
        &copy; {new Date().getFullYear()} , Schmick Window Cleaning
      </Heading>
    </Flex>
  );
};

export default Footer;
