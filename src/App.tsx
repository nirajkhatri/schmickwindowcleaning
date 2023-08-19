import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import TopBar from "./features/components/TopBar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./features/components/Footer";
import AboutScreen from "./screens/AboutScreen";
import ServiceScreen from "./screens/ServiceScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <ChakraProvider>
      <Grid>
        <GridItem height={"15vh"}>
          <TopBar />
        </GridItem>
        <GridItem height={"85vh"}>
          <HomeScreen />
        </GridItem>
        <GridItem minH={"90vh"}>
          <AboutScreen />
        </GridItem>
        <GridItem minH={"80vh"}>
          <ServiceScreen />
        </GridItem>
        {/*  <GridItem height={"80vh"}>
        <Testimonial />
      </GridItem>*/}
        <GridItem minH={"80vh"}>
          <ContactScreen />
        </GridItem>
        <GridItem height={"10vh"}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
