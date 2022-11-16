import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import "../CSS/footer.css";
import {
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <div style={{ backgroundColor: "#e9ad35" }} id="footer">
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        gap={[2, 2, 4, 5]}
        p={[3, 5, 7, 7]}
        flexWrap={"wrap"}
      >
        <Text
          color="white"
          fontWeight={500}
          fontSize={["sm", "lg", "xl", "xl"]}
          display={"flex"}
          alignItems="center"
          gap={1}
        >
          <FaPhone />
          +91 7757814963
        </Text>
        <Text
          color="white"
          fontWeight={500}
          fontSize={["sm", "lg", "xl", "xl"]}
          display={"flex"}
          alignItems="center"
          gap={1}
        >
          <FaLocationArrow />
          Pune, Maharashtra
        </Text>
        <Text
          color="white"
          fontWeight={500}
          fontSize={["sm", "lg", "xl", "xl"]}
          display={"flex"}
          alignItems="center"
          gap={1}
        >
          <FaEnvelope />
          pgiri570@gmail.com
        </Text>
        <Text
          color="white"
          fontWeight={500}
          fontSize={["sm", "lg", "xl", "xl"]}
          display={"flex"}
          alignItems="center"
          gap={1}
        >
          |
        </Text>
        <Button variant="blackAlpha" backgroundColor="#e9ad35">
          <a target="blank" href="https://github.com/pg570">
            <FaGithub id="github" size="40px" />
          </a>
        </Button>
        <Button variant="blackAlpha" backgroundColor="#e9ad35">
          <a
            target="blank"
            href="https://www.linkedin.com/in/prashant-giri-01a873220/"
          >
            <FaLinkedin id="linkedin" size="40px" />
          </a>
        </Button>
      </Box>

      <hr style={{ width: "50%", margin: "auto" }} />
      <br />
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        color="white"
        fontSize={["sm", "lg", "xl", "xl"]}
      >
        @2022 Designed and Build by Prashant Giri with
        <FaHeart color="red" />
      </Text>
      <br></br>
    </div>
  );
}

export default Footer;
