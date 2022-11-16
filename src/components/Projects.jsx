import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import bitrix from "../Assets/Img/Bitrix24.png";
import pharma from "../Assets/Img/Pharmeasy.png";
import bonsai from "../Assets/Img/Hellobonsai.png";
import cd from "../Assets/Img/CD.png";
import html from "../Assets/icons/html.png";
import css from "../Assets/icons/css.png";
import react from "../Assets/icons/react.png";
import js from "../Assets/icons/jspng.png";
import mongo from "../Assets/icons/mongo.png";
import node from "../Assets/icons/node.png";
import express from "../Assets/icons/express.png";
import { FaGithub, FaLink } from "react-icons/fa";
import "../CSS/projects.css";

function Projects() {
  return (
    <div
      style={{ marginTop: "50px", backgroundColor: "rgb(248, 248, 248)" }}
      id="projects"
    >
      <Heading
        _hover={{ color: "black" }}
        id="h12"
        p={10}
        mt={[5, 10, 10, 20]}
        size={["xl", "xl", "2xl", "3xl"]}
        color="#e9ad35"
      >
        Projects
      </Heading>

      <SimpleGrid
        w="70%"
        m="auto"
        columns={[1, 1, 2, 2]}
        spacing={[5, 10, 10, 20]}
      >
        {/* Project 1 */}
        <Box
          className="figure"
          p={[3, 4, 4, 5]}
          border="2px solid #e9ad35"
          borderRadius="10px"
        >
          <Image
            className="image"
            w="600px"
            border="1px solid #e9ad35"
            display="inline-block"
            src={bonsai}
            alt="project1"
          />

          <Heading w="90%" m="auto" mt={5} textAlign="left" size={"lg"}>
            Hellobonsai Website Clone
          </Heading>

          <Text
            w="90%"
            m="auto"
            mt={[2, 3, 4, 5]}
            color="#555"
            fontWeight="500"
            align="justify"
            lineHeight={[1, 1, 1, 1.5]}
          >
            Hello Bonsai is a freelancing management app. It offers freelance
            proposals and contracts. It handles your freelance invoices and
            payments.
          </Text>

          <Flex
            className="flx50"
            wrap="wrap"
            w="90%"
            m="auto"
            gap={3}
            alignItems="center"
            mt={[2, 3, 4, 5]}
          >
            <Text>Tech Stack-</Text>
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={html}
              alt="html"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["30px", "35px", "40px", "45px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={css}
              alt="css"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={js}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={react}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={mongo}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={node}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={express}
              alt="react"
            />
          </Flex>

          <Flex
            wrap="wrap"
            w="90%"
            m="auto"
            gap={[2, 2, 2, 5]}
            mt={[2, 3, 4, 5]}
          >
            <a
              target="blank"
              href="https://github.com/PRASHANT7277/Hellobonsai-clone"
            >
              <Button
                className="btn50"
                variant="outline"
                color="black"
                p={["3px 8px", "12px 18px", "12px 18px", "22px 30px"]}
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
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Github repo <FaGithub size="20px" />
                </Text>
              </Button>
            </a>

            <a target="blank" href="https://hellobonsai.vercel.app/">
              <Button
                className="btn50"
                variant="outline"
                color="white"
                p={["3px 8px", "12px 18px", "1px 18px", "22px 30px"]}
                border="3px solid"
                borderColor="#e9ad35"
                backgroundColor="#e9ad35"
                borderRadius="30px"
                _hover={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Live Site <FaLink className="fa-light" />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>

        {/* project 2 */}
        <Box
          className="figure"
          p={5}
          border="2px solid #e9ad35"
          borderRadius="10px"
        >
          <Image
            className="image"
            w="600px"
            border="1px solid #e9ad35"
            display="inline-block"
            src={cd}
            alt="project1"
          />

          <Heading w="90%" m="auto" mt={5} textAlign="left" size="lg">
            ComicaDigital Website
          </Heading>

          <Text
            w="90%"
            m="auto"
            mt={[2, 3, 4, 5]}
            color="#555"
            fontWeight="500"
            align="justify"
            lineHeight={[1, 1, 1, 1.5]}
          >
            ComicaDigital is the e-commerce website where user can order
            electronics appliances and home appliances as well.
          </Text>

          <Flex
            className="flx50"
            wrap="wrap"
            w="90%"
            m="auto"
            gap={3}
            alignItems="center"
            mt={[2, 3, 4, 5]}
          >
            <Text>Tech Stack-</Text>
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={html}
              alt="html"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["30px", "35px", "40px", "45px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={css}
              alt="css"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={js}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={react}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={mongo}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={node}
              alt="react"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={express}
              alt="react"
            />
          </Flex>

          <Flex
            wrap="wrap"
            w="90%"
            m="auto"
            gap={[2, 2, 2, 5]}
            mt={[2, 3, 4, 5]}
          >
            <a
              target="blank"
              href="https://github.com/pg570/ComicaDigital_website"
            >
              <Button
                className="btn50"
                variant="outline"
                color="black"
                p={["3px 8px", "12px 18px", "12px 18px", "22px 30px"]}
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
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Github repo <FaGithub size="20px" />
                </Text>
              </Button>
            </a>

            <a target="blank" href="https://comicadigital.netlify.app/">
              <Button
                className="btn50"
                variant="outline"
                color="white"
                p={["3px 8px", "12px 18px", "12px 18px", "22px 30px"]}
                border="3px solid"
                borderColor="#e9ad35"
                backgroundColor="#e9ad35"
                borderRadius="30px"
                _hover={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Live Site <FaLink className="fa-light" />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>

        {/* Project 3*/}
        <Box
          className="figure"
          p={5}
          border="2px solid #e9ad35"
          borderRadius="10px"
        >
          <Image
            className="image"
            w="600px"
            border="1px solid #e9ad35"
            display="inline-block"
            src={pharma}
            alt="project1"
          />

          <Heading w="90%" m="auto" mt={5} textAlign="left" size="lg">
            Pharmeasy Website Clone
          </Heading>

          <Text
            w="90%"
            m="auto"
            mt={[2, 3, 4, 5]}
            color="#555"
            fontWeight="500"
            align="justify"
            lineHeight={[1, 1, 1, 1.5]}
          >
            Pharmeasy.com is dedicated to pharmaceutical purpose, by keeping all
            their need in mind. It's an e-pharmaceutical website designed in its
            simplest form to navigate through some of the world's best brands.
            it gives a smooth user experience and user flow.
          </Text>

          <Flex
            className="flx50"
            wrap="wrap"
            w="90%"
            m="auto"
            gap={3}
            alignItems="center"
            mt={[2, 3, 4, 5]}
          >
            <Text>Tech Stack-</Text>
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={html}
              alt="html"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["30px", "35px", "40px", "45px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={css}
              alt="css"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={js}
              alt="react"
            />
          </Flex>

          <Flex
            wrap="wrap"
            w="90%"
            m="auto"
            gap={[2, 2, 2, 5]}
            mt={[2, 3, 4, 5]}
          >
            <a
              target="blank"
              href="https://github.com/Prashant3216/PharmEasy.com"
            >
              <Button
                className="btn50"
                variant="outline"
                color="black"
                p={["3px 8px", "15px 20px", "15px 20px", "22px 30px"]}
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
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Github repo <FaGithub size="20px" />
                </Text>
              </Button>
            </a>

            <a
              target="blank"
              href="https://lustrous-salamander-5df9ee.netlify.app"
            >
              <Button
                className="btn50"
                variant="outline"
                color="white"
                p={["3px 8px", "12px 18px", "12px 18px", "22px 30px"]}
                border="3px solid"
                borderColor="#e9ad35"
                backgroundColor="#e9ad35"
                borderRadius="30px"
                _hover={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Live Site <FaLink className="fa-light" />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>

        {/* project 4*/}
        <Box
          className="figure"
          p={5}
          border="2px solid #e9ad35"
          borderRadius="10px"
        >
          <Image
            className="image"
            w="600px"
            border="1px solid #e9ad35"
            display="inline-block"
            src={bitrix}
            alt="project1"
          />

          <Heading w="90%" m="auto" mt={5} textAlign="left" size="lg">
            Bitrix 24 Website Clone
          </Heading>

          <Text
            w="90%"
            m="auto"
            mt={[2, 3, 4, 5]}
            color="#555"
            fontWeight="500"
            align="justify"
            lineHeight={[1, 1, 1, 1.5]}
          >
            Bitrix24 is a multi-component online collaboration, automation, and
            marketing software platform for all kinds of organizations - from
            businesses to nonprofits.
          </Text>

          <Flex
            className="flx50"
            wrap="wrap"
            w="90%"
            m="auto"
            gap={3}
            alignItems="center"
            mt={[2, 3, 4, 5]}
          >
            <Text>Tech Stack-</Text>
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={html}
              alt="html"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["30px", "35px", "40px", "45px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={css}
              alt="css"
            />
            <Image
              _hover={{ transform: "translate(0,-5px)" }}
              w={["40px", "40px", "50px", "60px"]}
              h={["40px", "40px", "50px", "60px"]}
              src={react}
              alt="react"
            />
          </Flex>

          <Flex
            wrap="wrap"
            w="90%"
            m="auto"
            gap={[2, 2, 2, 5]}
            mt={[2, 3, 4, 5]}
          >
            <a
              target="blank"
              href="https://github.com/pg570/superb-laborer-7095"
            >
              <Button
                className="btn50"
                variant="outline"
                color="black"
                p={["3px 8px", "15px 20px", "15px 20px", "22px 30px"]}
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
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Github repo <FaGithub size="20px" />
                </Text>
              </Button>
            </a>

            <a target="blank" href="https://bitrix-eight.vercel.app">
              <Button
                className="btn50"
                variant="outline"
                color="white"
                p={["3px 8px", "12px 18px", "12px 18px", "22px 30px"]}
                border="3px solid"
                borderColor="#e9ad35"
                backgroundColor="#e9ad35"
                borderRadius="30px"
                _hover={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "black",
                }}
              >
                <Text
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  fontWeight="400"
                  fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
                >
                  Live Site <FaLink className="fa-light" />
                </Text>
              </Button>
            </a>
          </Flex>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Projects;
