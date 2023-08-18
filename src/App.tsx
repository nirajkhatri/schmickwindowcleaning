import { Grid, GridItem } from "@chakra-ui/react";
import TopBar from "./features/components/TopBar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./features/components/Footer";

const App = () => {
  return (
    <Grid>
      <GridItem height={"10vh"}>
        <TopBar />
      </GridItem>
      <GridItem height={"80vh"}>
        <HomeScreen />
      </GridItem>
      {/* <GridItem height={"90vh"}>
        <AboutScreen />
      </GridItem>
      <GridItem height={"80vh"}>
        <ServiceScreen />
      </GridItem>
      <GridItem height={"80vh"}>
        <Testimonial />
      </GridItem>
      <GridItem height={"80vh"}>
        <ContactScreen />
      </GridItem> */}
      <GridItem height={"10vh"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default App;
