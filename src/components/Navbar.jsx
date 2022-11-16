import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import resume from "../Assets/Prashant_Giri_Resume.pdf";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <Box
      bgColor="#e9ad35"
      id="navbar"
      p={[1, 2, 2, 3]}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Flex
        id="flex"
        justifyContent="space-between"
        gap={[2, 3, 4, 5]}
        p={[1, 2, 2, 3]}
      >
        <Link to="top" offset={-80} smooth={true}>
          <Text
            id="head"
            _hover={{ textShadow: "1px 1px white" }}
            ml={[3, 5, 5, 10]}
            as="b"
            fontSize={[20, 25, 35, 35]}
            fontFamily="BestermindRegular"
            color="#eaeaea"
            cursor="pointer"
          >
            𝓹𝓰
          </Text>
        </Link>

        <Box
          mr={[2, 3, 4, 10]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={[3, 4, 5, 20]}
        >
          <Link to="info2" offset={-75} smooth={true}>
            <Text
              className="text"
              _hover={{ textShadow: "0.5px 1px black" }}
              as="b"
              fontSize={[10, 18, 20, 20]}
              color="#eaeaea"
              cursor="pointer"
            >
              About
            </Text>
          </Link>

          <Link to="skills" offset={-120} smooth={true}>
            <Text
              className="text"
              _hover={{ textShadow: "0.5px 1px black" }}
              as="b"
              fontSize={[10, 18, 20, 20]}
              color="#eaeaea"
              cursor="pointer"
            >
              Skills
            </Text>
          </Link>

          <Link to="projects" offset={-73} smooth={true}>
            <Text
              className="text"
              _hover={{ textShadow: "0.5px 1px black" }}
              as="b"
              fontSize={[10, 18, 20, 20]}
              color="#eaeaea"
              cursor="pointer"
            >
              Projects
            </Text>
          </Link>

          <Link to="footer" smooth={true}>
            <Text
              className="text"
              _hover={{ textShadow: "0.5px 1px black" }}
              as="b"
              fontSize={[10, 18, 20, 20]}
              color="#eaeaea"
              cursor="pointer"
            >
              Contact
            </Text>
          </Link>

          <Text
            className="text"
            as="b"
            fontSize={[10, 18, 20, 20]}
            color="#eaeaea"
            cursor="pointer"
            display={"flex"}
            alignItems="center"
            gap={[1, 1, 1.5, 1.5]}
          >
            <a
              href="https://drive.google.com/file/d/1OuHpUqxn43SMJwrcR9whARxRCVR4p_S1/view?usp=sharing"
              target="blank"
            >
              <Text _hover={{ textShadow: "0.5px 1px black" }}>Resume</Text>
            </a>
            <a href={resume} download>
              <Box
                border={"2px solid #eaeaea"}
                _hover={{ border: "2px solid grey" }}
                borderRadius="50%"
                p={1}
              >
                <FaDownload />
              </Box>
            </a>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
