import { Box, Flex, Text } from "@chakra-ui/react";
import COLOR from "../../constants/COLOR";

const TopBar = () => {
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
      {/* <Box display={"flex"} flex={1} justifyContent={"flex-end"} gap={40}>
        <Button as={Link}>Home</Button>
        <Button as={Link}>Service</Button>
        <Button as={Link}>About</Button>
        <Button as={Link}>Contact</Button>
      </Box> */}
    </Flex>
  );
};

export default TopBar;
