import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import {FaDownload, FaEnvelope, FaGithub, FaHandshake, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa'
import "../CSS/info.css"
import profilepic from "../Assets/Img/Passport_Photo.jpeg"
import { Link } from 'react-scroll'
import resume from "../Assets/Prashant_Giri_Resume.pdf"

function Info() {
  return (
    <SimpleGrid columns={[3,3,3,3]} id="top">
        <Box w={[50,200,250,400]} bgColor="#e9ad35" >
            <Text fontWeight={500} align="left" ml={10}  mt={[160,350,360,560]} color="white" display="flex" alignItems="center" gap={2}>Let's Connect <FaHandshake size="25px" />-</Text>
            <Flex id="flex1" gap={[2,2,4,5]} mt={3} ml={10} mb={[5,5,10,10]} flexWrap="wrap" >
                <Box onClick={()=> window.location="mailto:pgiri570@gmail.com"}><FaEnvelope id='envelope' size="40px" /></Box>
                <a target="blank" href="https://www.linkedin.com/in/prashant-giri-01a873220/"><FaLinkedin className='icon' size="40px" color='white' /></a>
                <a target="blank" href="https://github.com/pg570"><FaGithub className='icon' size="40px" color='white'/></a>
                <a target="blank" href="https://www.instagram.com/prashant_giri_pg/"><FaInstagram className='icon' size="40px" color='white' /></a>
            </Flex>
        </Box>
        
        <Box>
            <Image id='img0'  w={[100,200,300,400]} h={[100,200,300,400]} borderRadius="50%" ml={[-50,-100,-250,-300]} mt={[
                100,100,110]} position="relative" zIndex="10px" src= {profilepic} />
        </Box>
       
        <Box ml={[-50,"-80px",-150,-200]} mr={[50,30,100,150]} mt={[,50,100,120,150]}>
            
                <Text id='text1' align="left" fontSize="2xl" color="#555">Web Developer</Text>
                <Text id='text2' className='textgrad' align="left" fontSize="5xl" fontWeight="700" mt={[-5,-3,-2,-1]}>Prashant</Text>
                <Text id='text3' className="textgrad" align="left" fontSize="5xl" mt={[-5,-5,-5,-5]} fontWeight="700">Giri</Text>
                <Text id='text4' align="left" fontSize="lg" mt={[1,1,5,5]} fontWeight="600" color="#555">Hello! Welcome, my name is Prashant Giri. I'm a full stack web developer based in India. I am highly-proficient in MERN stack and looking for opportunities to learn and build. So...let's connect! and start building!</Text>
                
                <Box id='box1' mt={[2,3,4,5]} flexWrap="wrap" display="flex" gap={[1,2,5,5]}>
                    <a href={resume} download>
                    <Button id="btn1"
                    variant="outline" 
                    color="#e9ad35" p="22px 30px" 
                    border="3px solid" 
                    borderColor="#e9ad35" 
                    borderRadius="30px" 
                    w={[100,100,120,150]}
                    _hover={{backgroundColor:"black", color:"white" , borderColor:"black"}}>
                        <Text id="text5" display="flex" gap={1} fontWeight="500" fontSize={[10,15,15,20]}>Resume <FaDownload /></Text>
                    </Button>
                    </a>


                    <Link to="footer" smooth={true}>
                    <Button id="btn2"
                    variant="solid" 
                    backgroundColor="#e9ad35"
                    color="white" p="22px 30px" 
                    border="3px solid" 
                    borderColor="#e9ad35" 
                    borderRadius="30px" 
                    w={[100,100,120,150]}
                    _hover={{backgroundColor:"white", color:"black" , borderColor:"black"}}>
                        <Text id="text6" display="flex" alignItems="center" gap={2} fontWeight="500" fontSize={[10,15,15,20]}>Contact<FaPhone /></Text>
                    </Button>
                    </Link>
            </Box>
        </Box>
    </SimpleGrid>
  )
}

export default Info