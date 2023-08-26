import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import COLOR from "../../constants/COLOR";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const TopBar = () => {
  const displayer = useBreakpointValue({ base: "flex", md: "none" });
  const displayer1 = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Flex
      id="home"
      px={"40px"}
      flex={1}
      alignItems={"center"}
      height={"100%"}
      bg={COLOR.LIGHT_CREAM}
      justifyContent={"space-between"}
    >
      <Box>
        <Text fontWeight={"bold"} color={COLOR.BLUE} fontSize={24}>
          SWC
        </Text>
      </Box>
      <Box display={displayer1} flex={1} justifyContent={"flex-end"} gap={8}>
        <Link to="home" smooth={true} duration={500}>
          <Button>Home</Button>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <Button>About</Button>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <Button>Service</Button>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <Button>Contact</Button>
        </Link>
      </Box>
      <IconButton display={displayer} aria-label="menu-button">
        <AiOutlineMenu />
      </IconButton>
    </Flex>
  );
};

export default TopBar;
