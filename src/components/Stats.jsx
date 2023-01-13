import { Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Stats() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Heading _hover={{ color: "black" }} color="#e9ad35">
      <Text 
        fontSize={["3xl", "4xl", "5xl", "7xl"]}>
        Statistics
        </Text>
      </Heading>

      <SimpleGrid columns={[1,1,1,2]} w={"90%"} margin="auto" mt={5}>
          <Image w="90%" margin="auto" src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=pg570&show_icons=true&locale=en" />
          <Image
            w="90%"
            margin="auto"
            src="https://github-readme-streak-stats.herokuapp.com/?user=pg570&"
          />
      </SimpleGrid>
    </div>
  );
}

export default Stats;
