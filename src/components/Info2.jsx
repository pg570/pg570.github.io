import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import "../CSS/info2.css"
import devgif from "../Assets/icons/dev-gifgif.gif"

function Info2() {
  return (
    <SimpleGrid columns={[1,1,2,2]}  id="info2" p={10}
    style={{backgroundColor:"rgb(246, 246, 246)"}} mb={10}>
        <Box  p={10}>
            <Heading id='head1' mt={5} textAlign="left" size="3xl" color="#e9ad35">Who I am</Heading>
                
            <Text id='txt1' mt={10} align="left" fontSize="xl" fontWeight="500" color="#555">As you know now, my name is Prashant Giri and I'm a full stack web developer based in India.</Text>
                
            <Text id='txt2' mt={5} align="left" fontSize="xl"  fontWeight="500" color="#555">Right now I have finished my full stack web development cousre from Masai School, Bangalore. I love to learn and explore new areas. I am highly-proficient in MERN stack and eager to learn and ready to contribute to the development of an organization.</Text>
           
        </Box>


        <Box p={3}>
            <Image id='img5' display="block" w="1500px" src={devgif} alt="dev" />
        </Box>
    </SimpleGrid>
  )
}

export default Info2