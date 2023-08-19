import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import COLOR from "../../constants/COLOR";
import { AiOutlineMenu } from "react-icons/ai";

const TopBar = () => {
  const displayer = useBreakpointValue({ base: "flex", md: "none" });
  const displayer1 = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Flex
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
        <Button as={Link}>Home</Button>
        <Button as={Link}>About</Button>
        <Button as={Link}>Service</Button>
        <Button as={Link}>Contact</Button>
      </Box>
      <IconButton display={displayer} aria-label="menu-button">
        <AiOutlineMenu />
      </IconButton>
    </Flex>
  );
};

export default TopBar;
