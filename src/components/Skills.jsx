import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import html from "../Assets/icons/html.png"
import css from "../Assets/icons/css.png"
import js from "../Assets/icons/jspng.png"
import react from "../Assets/icons/react.png"
import redux from "../Assets/icons/redux.png"
import mongodb from "../Assets/icons/mongo.png"
import express from "../Assets/icons/express.png"
import node from "../Assets/icons/node.png"
import git from "../Assets/icons/git.png"
import dsa from "../Assets/icons/dsapng.png"
import ts from "../Assets/icons/tspng.png"
import postman from "../Assets/icons/postman.png"
import dev from "../Assets/icons/dev.jpg"
import vercel from "../Assets/icons/vercel.png"
import hero from "../Assets/icons/hero.png"
import netlify from "../Assets/icons/netlify.png"
import json from "../Assets/icons/JSON.png"
import chakra from "../Assets/icons/chakrajpg.jpg"
import npm from "../Assets/icons/npm.png"
import React from 'react'
import "../CSS/skills.css"

function Skills() {
  return (
    <div style={{marginTop:"70px"}} id="skills">

        <Heading id='h5' color="#e9ad35" size="3xl">Skills and Tools I Use ...</Heading>

        <SimpleGrid id='sg' w="60%" m="auto" columns={[2,3,4,4,5]} mt={20} spacing={10}>
          <Box id='b10' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"5px"}}>
            <Image w="78%" mt={2} display="inline-block"  src={html} alt="HTML" />
            <Text fontFamily="Bahnschrift" mt={3}>HTML</Text>
          </Box>
          
          <Box id='b11' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="60%"  display="inline-block"  src={css} alt="CSS" />
            <Text fontFamily="Bahnschrift" mt={3}>CSS</Text>
          </Box>
          
          <Box id='b12' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="85%" display="inline-block"  src={js} alt="JS" />
             <Text fontFamily="Bahnschrift" mt={3}>JavaScript</Text>
          </Box>
          
          <Box id='b13' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={3} display="inline-block" src={react} alt="REACT" />
             <Text fontFamily="Bahnschrift" mt={3}>REACT</Text>
          </Box>
          
          <Box id='b14' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={3} display="inline-block"  src={redux} alt="REDUX" />
             <Text fontFamily="Bahnschrift" mt={3}>REDUX</Text>
          </Box>
          
          <Box id='b15' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="88%" display="inline-block"  src={node} alt="NODE" />
             <Text fontFamily="Bahnschrift" mt={3}>NodeJS</Text>
          </Box>
          
          <Box id='b16' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="85%" display="inline-block"  src={mongodb} alt="MongoDB" />
             <Text fontFamily="Bahnschrift" mt={3}>MongoDB</Text>
          </Box>
          
          <Box id='b17' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={express} alt="EXPRESS" />
             <Text fontFamily="Bahnschrift" mt={3}>ExpressJS</Text>
          </Box>
          
          <Box id='b19' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={ts} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>TypeScript</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={git} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>GIT</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={chakra} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Chakra UI</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={postman} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Postman</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={dev} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Redux devTools</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={json} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>JSON-Server</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={npm} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>npm</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={vercel} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Vercel</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={hero} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Heroku</Text>
          </Box>

          <Box id='b18' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image w="80%" mt={2} display="inline-block"  src={netlify} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>Netlify</Text>
          </Box>

          <Box id='b20' w="90%" _hover={{transform : "translate(0,-10px)"}} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 25px 20px -20px", alignItems:"center", padding:"10px"}}>
            <Image id='img10' w="80%" mt={2} display="inline-block"  src={dsa} alt="GIT" />
             <Text fontFamily="Bahnschrift" mt={3}>DSA</Text>
          </Box>

        </SimpleGrid>
    </div>
  )
}

export default Skills