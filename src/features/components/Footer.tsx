import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import COLOR from "../../constants/COLOR";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      bg={COLOR.LIGHT_CREAM}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading textAlign={"center"} size={isMobile ? "sm" : "md"}>
        &copy; 2019 - {new Date().getFullYear()} , Schmick Window Cleaning
      </Heading>
    </Flex>
  );
};

export default Footer;
