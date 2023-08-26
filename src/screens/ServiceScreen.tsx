import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import COLOR from "../constants/COLOR";

import CITY from "../assets/CITY.jpg";
import RESIDENT from "../assets/RESIDENT.jpg";
import STORE_FRONT from "../assets/STORE_FRONT.jpg";
import COMMERCIAL from "../assets/COMMERCIAL.jpg";

const SERVICES_LIST = [
  {
    id: 0,
    name: "RESIDENTIAL",
    image: RESIDENT,
    description:
      "Windows are the primary source for natural light in your home! Have them washed and cleaned both internally and externally to bring out the beauty of your house.",
  },
  {
    id: 1,
    name: "COMMERCIAL",
    image: COMMERCIAL,
    description:
      "Regular Commercial Window Cleaning is the best way to create positive customer perception. We use the water Fed Pole system to reach high windows without risk of damage.",
  },
  {
    id: 2,
    name: "STORE FRONTS",
    image: STORE_FRONT,
    description:
      "Store front window cleaning is done on a weekly or fortnightly basis. Professionally cleaned windows speak volumes about the kind of business that you represent. if your glass is dirty, it will be the first thing customers notice.",
  },
  {
    id: 3,
    name: "PRESSURE CLEANING",
    image: CITY,
    description:
      "We take care of cleanliness and hygiene, so you doesn't have worry about cleaning!",
  },
];

const cardsPerLine = 3; // Number of cards in one line
const gap = 10; // Gap between cards
const totalGap = (cardsPerLine - 1) * gap;
const cardWidth = `calc((100% - ${totalGap}px) / ${cardsPerLine})`;

const ServiceScreen = () => {
  const flexDirection1 = useBreakpointValue({ base: "column", md: "row" });
  const width1 = useBreakpointValue({ base: "100%", md: "60%" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      id="services"
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
        flexDirection={flexDirection1 as any}
        my={isMobile ? "50px" : "100px"}
        flexWrap={"wrap"}
        gap={"10px"}
        w={"100%"}
      >
        {SERVICES_LIST.map((service) => {
          return (
            <Card
              key={service.id}
              borderRadius={10}
              style={{
                padding: "20px",
              }}
              display={"flex"}
              textAlign={"center"}
              width={isMobile ? "100%" : cardWidth}
            >
              <CardBody>
                <Image src={service.image} height={"200px"} width={"100%"} />
                <CardHeader>
                  <Heading size={"sm"}>{service.name}</Heading>
                </CardHeader>
                <Text>{service.description}</Text>
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ServiceScreen;
