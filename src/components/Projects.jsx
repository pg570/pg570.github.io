import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import bitrix from "../Assets/Img/Bitrix24.png"
import pharma from "../Assets/Img/Pharmeasy.png"
import html from "../Assets/icons/html.png"
import css from "../Assets/icons/css.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/jspng.png"
import { FaGithub, FaLink } from 'react-icons/fa'
import "../CSS/projects.css"


function Projects() {
  return (
    <div style={{marginTop :"50px", backgroundColor:"rgb(248, 248, 248)"}} id="projects" >
        <Heading id='h12' p={10} mt={20} size="3xl" color="#e9ad35">Projects</Heading>

        <SimpleGrid w="70%" m="auto" columns={[1,1,2,2]} spacing={20} p={10}>
          {/* Project 1 */}
          <Box className='figure'  p={5} border="2px solid #e9ad35" borderRadius="10px" >

            
              <Image className='image' w="600px" border="1px solid #e9ad35"  display="inline-block" src={bitrix} alt="project1"/>
           
            
            <Heading w="90%" m="auto" mt={5} textAlign="left" size="lg">Bitrix 24 Website Clone</Heading>
            
            <Text w="90%" m="auto" mt={5} color="#555" fontWeight="500" align="justify">Bitrix24 is a multi-component online collaboration, automation, and marketing software platform for all kinds of organizations - from businesses to nonprofits.</Text>
            <Text w="90%" m="auto" mt={3} color="#555" fontWeight="500" align="justify">Built with React using styled-components from scratch.</Text>
            
            
            <Flex className='flx50' wrap="wrap" w="90%" m="auto" gap={3} alignItems="center" mt={7}>
              <Text>Tools I used -</Text>
              <Image _hover={{transform:"translate(0,-5px)"}} w="60px" h="60px" src={html} alt="html"/>
              <Image _hover={{transform:"translate(0,-5px)"}} w="45px" h="60px" src={css} alt="css"/>
              <Image _hover={{transform:"translate(0,-5px)"}} w="50px" h="50px"src={react} alt="react"/>
            </Flex>

            <Flex wrap="wrap" w="90%" m="auto" gap={5} mt={5}>
            <a target="blank" href="https://github.com/pg570/superb-laborer-7095"><Button
                    className='btn50'
                    variant="outline" 
                    color="black" p="15px 25px" 
                    border="3px solid" 
                    borderColor="#e9ad35" 
                    borderRadius="30px"
                    _hover={{backgroundColor:"black", color:"white" , borderColor:"black"}}>
                        <Text display="flex" justifyContent="center" alignItems="center" gap={1} fontWeight="400" fontSize="1rem">
                          Github repo <FaGithub size="20px" /></Text>
                </Button></a>

                <a target="blank" href="https://bitrix-eight.vercel.app"><Button
                    className='btn50'
                    variant="outline" 
                    color="white" p="15px 25px" 
                    border="3px solid" 
                    borderColor="#e9ad35" 
                    backgroundColor="#e9ad35"
                    borderRadius="30px" 
                    _hover={{backgroundColor:"white",color:"black" , borderColor:"black"}}>
                        <Text display="flex" justifyContent="center" alignItems="center" gap={1} fontWeight="400" fontSize="1rem">
                          Live Site <FaLink className="fa-light" /></Text>
                 </Button></a>
            </Flex>
          </Box>
          
          {/* Project 2*/}
          <Box className='figure' p={5} border="2px solid #e9ad35" borderRadius="10px" >

            <Image className='image' w="600px" border="1px solid #e9ad35"  display="inline-block" src={pharma} alt="project1"/>
            
            <Heading w="90%" m="auto" mt={5} textAlign="left" size="lg">Pharmeasy Website Clone</Heading>
            
            <Text w="90%" m="auto" mt={5} color="#555" fontWeight="500" align="justify">Pharmeasy.com is dedicated to pharmaceutical purpose, by keeping all their need in mind. It's an e-pharmaceutical website designed in its simplest form to navigate through some of the world's best brands. it gives a smooth user experience and user flow.</Text>
            <Text w="90%" m="auto" mt={3} color="#555" fontWeight="500" align="justify">A collaborative project built by a team of 5, executed in 5 days.</Text>
            
            
            <Flex className='flx50' wrap="wrap" w="90%" m="auto" gap={3} alignItems="center" mt={7}>
              <Text>Tools I used -</Text>
              <Image _hover={{transform:"translate(0,-5px)"}} w="60px" h="60px" src={html} alt="html"/>
              <Image _hover={{transform:"translate(0,-5px)"}} w="45px" h="60px" src={css} alt="css"/>
              <Image _hover={{transform:"translate(0,-5px)"}} w="60px" h="60px"src={js} alt="react"/>
            </Flex>

            <Flex wrap="wrap" w="90%" m="auto" gap={5} mt={5}>
            <a target="blank" href="https://github.com/Prashant3216/PharmEasy.com"><Button
                    className='btn50'
                    variant="outline"
                    color="black" p="15px 25px" 
                    border="3px solid" 
                    borderColor="#e9ad35" 
                    borderRadius="30px"
                    _hover={{backgroundColor:"black", color:"white" , borderColor:"black"}}>
                        <Text display="flex" justifyContent="center" alignItems="center" gap={1} fontWeight="400" fontSize="1rem">
                          Github repo <FaGithub size="20px" /></Text>
                </Button></a>

                <a target="blank" href="https://lustrous-salamander-5df9ee.netlify.app"><Button
                    className='btn50'
                    variant="outline" 
                    color="white" p="15px 25px" 
                    border="3px solid" 
                    borderColor="#e9ad35"
                    backgroundColor="#e9ad35" 
                    borderRadius="30px" 
                    _hover={{backgroundColor:"white", color:"black" , borderColor:"black"}}>
                        <Text display="flex" justifyContent="center" alignItems="center" gap={1} fontWeight="400" fontSize="1rem">
                          Live Site <FaLink className="fa-light" /></Text>
                 </Button></a>
            </Flex>
          </Box>
          
        </SimpleGrid> 
    </div>
  )
}

export default Projects