import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Stats() {
  return (
    <div style={{marginTop:"50px"}}>
        <Heading color="#e9ad35" size="3xl">Statistics</Heading>

        <SimpleGrid style={{marginTop:"50px", marginBottom:"50px"}} w="54%" m="auto" p={5} spacing={10} columns={[2,3,4]}>
         <Box>
          <Box p={10} border="6px solid #e9ad35" borderRadius="50%">
            <Text fontSize="2xl" fontWeight={500} color="#555">1200+</Text>
          </Box> <Text fontSize="3xl" fontWeight={500}>Hours</Text> <Text color="#555" fontWeight={500}>of Full Stack Coding</Text>
          </Box>


          <Box>
          <Box p={10} border="6px solid #e9ad35" borderRadius="50%">
            <Text fontSize="2xl" fontWeight={500} color="#555">86+</Text>
          </Box><Text fontSize="3xl" fontWeight={500}>Git</Text> <Text color="#555" fontWeight={500}>Commits</Text>
          </Box>

          <Box>
          <Box p={10} border="6px solid #e9ad35" borderRadius="50%">
            <Text fontSize="2xl" fontWeight={500} color="#555">5+</Text>
          </Box><Text fontSize="3xl" fontWeight={500}>Projects</Text> <Text color="#555" fontWeight={500}>Done</Text>
          </Box>

          <Box>

          <Box p={10} border="6px solid #e9ad35" borderRadius="50%">
            <Text fontSize="2xl" fontWeight={500} color="#555">100+</Text>
          </Box><Text fontSize="3xl" fontWeight={500}>Hours</Text> <Text color="#555" fontWeight={500}>of Soft Skills Sessions</Text>
          </Box>
        </SimpleGrid>

    </div>
  )
}

export default Stats