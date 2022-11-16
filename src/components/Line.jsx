import { Box } from "@chakra-ui/react";
import React from "react";

function Line() {
  return (
    <Box
      w={"90%"}
      m="auto"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      gap={[2, 3, 5]}
      mt={["20px", "20px", "50px"]}
      mb={["20px", "20px", "50px"]}
    >
      <Box
        w={[2, 2, 3]}
        h={[2, 2, 3]}
        bgColor="#e9ad35"
        borderRadius={"50%"}
      ></Box>
      <Box
        w={[2, 2, 3]}
        h={[2, 2, 3]}
        bgColor="#e9ad35"
        borderRadius={"50%"}
      ></Box>
      <Box
        w={["80%", "90%", "90%"]}
        h={[1, 2, 2]}
        borderRadius="10px"
        bgColor="#e9ad35"
      ></Box>
    </Box>
  );
}

export default Line;
