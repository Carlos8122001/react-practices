import { Box, CardFooter, Divider, Heading, Stack } from "@chakra-ui/react";
import DogCard from "./components/DogCard";

const dogAPI = "https://dog.ceo/api/breeds/image/random";

function App() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100vh"}
      >
        <DogCard />
      </Box>
      <Heading size="sm" textAlign={"center"} margin={"15px"} opacity={"0.7"}>© 2023 – Creation of Carlos Velásquez by Dog API</Heading>
    </>
  );
}

export default App;
