import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import devgif from "../Assets/icons/dev-gifgif.gif";

function Info2() {
  return (
    <SimpleGrid
      columns={[1, 1, 2, 2]}
      id="info2"
      p={[5,5,7,10]}
      style={{ backgroundColor: "rgb(246, 246, 246)" }}
      mb={10}
    >
      <Box p={[5,5,10,10]}>
        <Heading
          _hover={{ color: "black" }}
          textAlign="left"
          size={["xl","xl","2xl","3xl"]}
          color="#e9ad35"
        >
          Who I am
        </Heading>

        <Text
          mt={[2,4,5,10]}
          align="left"
          textAlign={"justify"}
          fontSize={["sm","lg","xl","xl"]}
          fontWeight={[400,400,400,500]}
          color="#555"
          lineHeight={[1,1,1.5,1.5]}
        >
          As you know now, my name is Prashant Giri and I'm a full stack web
          developer based in India.
        </Text>

        <Text
          mt={[1,2,4,5]}
          align="left"
          textAlign={"justify"}
          fontSize={["sm","lg","xl","xl"]}
          fontWeight={[400,400,400,500]}
          color="#555"
          lineHeight={[1,1,1.5,1.5]}
        >
          Right now I have finished my full stack web development cousre from
          Masai School, Bangalore. I love to learn and explore new areas. I am
          highly-proficient in MERN stack and eager to learn and ready to
          contribute to the development of an organization.
        </Text>
      </Box>

      <Box p={3}>
        <Image id="img5" display="inline-block" w={["250px","300px","400px","600px"]} src={devgif} alt="dev" mt={["auto","auto",180,"auto"]} />
      </Box>
    </SimpleGrid>
  );
}

export default Info2;
