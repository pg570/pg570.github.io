import React from 'react'
import "../CSS/navbar.css"
import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import {Link} from "react-scroll"

function Navbar() {
  return (
    <Box bgColor="#e9ad35" id="navbar" >
        <Flex id="flex" justifyContent="space-between" gap={[5,5,5]}   p={[1,2,3]} >
            <Link to="top" offset={-80} smooth ={true}>
              <Text id="head" _hover={{textShadow: "1px 1px white"}}  ml={[5,5,10]} as="b" fontSize={[20,25,35]} fontFamily="BestermindRegular" color="#eaeaea" cursor="pointer"> 𝓹𝓰. </Text>
            </Link>
              
            <HStack id="hstack" mr={10} spacing={10}>
                <Link to="info2" offset={-75} smooth={true}>
                  <Text className="text" _hover={{textShadow: "0.5px 1px black"}} as="b" fontSize={[10,18,20]} color="#eaeaea" cursor="pointer">About</Text>
                </Link>

                <Link to="skills" offset={-120} smooth={true}>
                <Text className="text" _hover={{textShadow: "0.5px 1px black"}} as="b" fontSize={[10,18,20]} color="#eaeaea" cursor="pointer">Skills</Text>
                </Link>

                <Link to="projects" offset={-73} smooth={true}>
                <Text className="text" _hover={{textShadow: "0.5px 1px black"}} as="b" fontSize={[10,18,20]} color="#eaeaea" cursor="pointer">Projects</Text>
                </Link>

                <Link to="footer" smooth={true}>
                <Text className="text" _hover={{textShadow: "0.5px 1px black"}} as="b" fontSize={[10,18,20]} color="#eaeaea" cursor="pointer">Contact</Text>
                </Link>
            </HStack>
        </Flex>
    </Box>
  )
}

export default Navbar