import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

export default function DogCard() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const dogAPI = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    if (loading) {
      fetch(dogAPI)
        .then((response) => response.json())
        .then((resDog) => setData(resDog.message));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      <Card
        width={"500px"}
        margin={"40px"}
        boxShadow="2xl"
        display={"flex"}
        justify={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <CircularProgress isIndeterminate/>
        ) : (
          <CardBody display={"flex"} justifyContent={"center"}>
            <Stack mt="2" spacing="2">
              <Heading size="lg">Dog API Random</Heading>
              <Image
                src={data}
                alt={`image from api dog ${data}`}
                marginLeft={"auto"}
                marginRight={"auto"}
                borderRadius={"2xl"}
                objectFit='cover'
                width={"100%"}
              />
            </Stack>
          </CardBody>
        )}
        <Divider />
        <CardFooter display={"flex"} justify={"center"}>
          <Button variant="solid" colorScheme="blue" size={"lg"} onClick={()=> setLoading(true)}>
            New Dog
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
