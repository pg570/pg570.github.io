import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import "../CSS/footer.css"
import {FaEnvelope, FaGithub, FaHeart, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone} from "react-icons/fa"

function Footer() {
  return (
    <div style={{height:"auto" ,backgroundColor:"#e9ad35"}} id="footer">

      <SimpleGrid w="30%" m="auto" p={5} columns={[1,2,4,4]} display="flex" justifyContent="space-around" gap={[2,3,4,5]}>
        
      <Box onClick={()=> window.location="mailto:pgiri570@gmail.com"}
       ><FaEnvelope id='envelope' size="40px" /></Box>


        <Popover>
          <PopoverTrigger>
            <Box className='btn21' p={1} ><FaPhone id='phone' size="32px" /></Box>
          </PopoverTrigger>
          <PopoverContent backgroundColor="black" w="150px">
            <PopoverArrow  backgroundColor="black"/>
            <PopoverHeader color="white">7757814963</PopoverHeader>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Box className='btn21'p={1}  ><FaLocationArrow id="home" size="32px" /></Box>
          </PopoverTrigger>
          <PopoverContent backgroundColor="black" w="180px">
            <PopoverArrow backgroundColor="black"/>
                <PopoverBody color="white">Pune, Maharashtra</PopoverBody>
          </PopoverContent>
        </Popover>


        <Button variant="blackAlpha" backgroundColor="#e9ad35"><a target="blank" href="https://www.linkedin.com/in/prashant-giri-01a873220/"><FaLinkedin id='linkedin' size="40px" /></a></Button>

        <Button variant="blackAlpha" backgroundColor="#e9ad35"><a target="blank" href="https://github.com/pg570"><FaGithub id='github' size="40px" /></a></Button>

        <Button variant="blackAlpha" backgroundColor="#e9ad35"><a target="blank" href="https://www.instagram.com/prashant_giri_pg/"><FaInstagram id='twitter' size="40px" /></a></Button>

      </SimpleGrid>

      
      <hr style={{width:"50%", margin:"auto"}} />
      <br/>
      <Text display="flex" justifyContent="center" alignItems="center" gap="5px" color="#555">@2022 Designed and Build by Prashant Giri with<FaHeart color="red" /> </Text>
      <br></br>
    </div>
  )
}

export default Footer