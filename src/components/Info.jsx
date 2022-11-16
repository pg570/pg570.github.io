import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaDownload,
  FaPhone,
} from "react-icons/fa";
import "../CSS/info.css";
import profilepic from "../Assets/Img/Passport_Photo.jpeg";
import { Link } from "react-scroll";
import resume from "../Assets/Prashant_Giri_Resume.pdf";

function Info() {
  return (
    <SimpleGrid columns={[3, 3, 3, 3]} id="top">
      <Box w={[110,200,230,400]} h={["auto","auto","auto",665]} bgColor="#e9ad35">
        
      </Box>

        <Image
          id="img0"
          w={[120, 200,230, 380]}
          h={[120, 200,230, 380]}
          borderRadius="50%"
          ml={["-75px", -180,-145, -300]}
          mt={["60px",90,20,110]}
          position="relative"
          zIndex="10px"
          src={profilepic}
        />

      <Box
        ml={["-55px", "-80px", -130, -200]}
        mr={[25, 100,70, 150]}
        mt={[30, 100,50, 150]}
      >
        <Text id="text1" align="left" fontSize={["lg","xl","3xl"]} color="#555">
          Full Stack Web Developer
        </Text>
        <Text
          id="text2"
          className="textgrad"
          align="left"
          fontSize={["2xl","4xl","5xl"]}
          fontWeight="700"
          mt={[-1,0,0]}
          lineHeight={1}
        >
          Prashant Giri
        </Text>
        <Text
          id="text4"
          align="left"
          textAlign={"justify"}
          fontSize={["xs","sm","lg"]}
          mt={[1, 1, 5, 5]}
          fontWeight={["400","500","600"]}
          color="#555"
          lineHeight={[1,1,1.5]}
        >
          Hello! Welcome, my name is Prashant Giri. I'm a full stack web
          developer based in India. I am highly-proficient in MERN stack and
          looking for opportunities to learn and build. So...let's connect! and
          start building!
        </Text>

        <Box
          id="box1"
          mt={[2, 4, 5]}
          flexWrap="wrap"
          display="flex"
          gap={[1, 2, 5]}
        >
          <a href={resume} download>
            <Button
              id="btn1"
              variant="outline"
              color="#e9ad35"
              p={["1px 5px","15px 20px","15px 20px","22px 30px"]}
              border="3px solid"
              borderColor="#e9ad35"
              borderRadius="30px"
              _hover={{
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
              }}
            >
              <Text
                display="flex"
                gap={1}
                fontWeight="500"
                fontSize={[9, 12, 20]}
              >
                Resume <FaDownload />
              </Text>
            </Button>
          </a>

          <Link to="footer" smooth={true}>
            <Button
              id="btn2"
              variant="solid"
              backgroundColor="#e9ad35"
              color="white"
              p={["1px 5px","15px 20px","15px 20px","22px 30px"]}
              border="3px solid"
              borderColor="#e9ad35"
              borderRadius="30px"
              _hover={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
              }}
            >
              <Text
                id="text6"
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight="500"
                fontSize={[9, 12, 20]}
              >
                Contact
                <FaPhone />
              </Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default Info;
