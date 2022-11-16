import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Heading } from "@chakra-ui/react";
const GitHub = () => {
  const github = {
    margin: "auto",
    border: "2px solid #e9ad35",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <Heading
        _hover={{ color: "black" }}
        color="#e9ad35"
        size={["xl","2xl","2xl","3xl"]}
        mt={[2,5,7,10]}
        mb={[5,5,7,10]}
      >
        Days I Code
      </Heading>
      <Box w={["90%", "90%","90%","80%"]} style={github} className="github_Calender">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="pg570"
          year={new Date().getFullYear()}
        />
      </Box>
    </div>
  );
};

export default GitHub;
