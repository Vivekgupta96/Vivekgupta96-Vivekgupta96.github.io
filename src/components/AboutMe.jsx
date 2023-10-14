import { Box,Text,Flex,Spacer,Button } from '@chakra-ui/react'
import React from 'react'
import {FaLinkedin,FaTwitterSquare,FaGithubSquare} from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
    <Box className='about' id='about' pt={"50px"} w={{md:"50%",lg:"50%",xl:"50%",sm:"90%",base:"90%"}} m={"auto"} textAlign={"center"}>
        <Text color={"blue.600"} fontSize={"4xl"} fontWeight={"bold"}>About Me</Text>
        <Text as="b" color="gray">@VivekGupta96</Text>

        <Text mt={"20px"} textAlign={"justify"}>Hi! I'm Vivek, I have a Bachelor Degree (B.tech) from MLV Textile Govt. Engineering College, under the Rajasthan Technical University.</Text>
        <Text mt={"20px"} textAlign={"justify"}>Highly dedicated and ambitious developer with extensive expertise in Java,Spring Boot, JavaScript, and ReactJS. Equipped with a deep understanding ofboth front-end and back-end technologies, I excel in developing scalableapplications. Passionate for technology and commitment to excellence driveme to continuously enhance my skills and knowledge.</Text>
        <Flex mt={"30px"} justifyContent={"center"} gap={"20px"} fontSize={"14px"}>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#WEB</Text></Box>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#TECH</Text></Box>
            <Box borderRadius={"3px"} bgColor={"white"} p={"2px 20px 2px 20px"} color={"black"}><Text>#DSA</Text></Box>
        </Flex>
        <Button _hover={{backgroundColor:"blue.400"}} mt={"20px"} bgColor={"blue.400"} p={"2px 20% 2px 20%"}><Text size={"xl"} color={"white"}>REACHED ME AT</Text></Button>
        <Flex justifyContent={"center"} _hover={{cursor:"pointer"}} color={"blue.400"} gap="5px" pt={"20px"} pb={"50px"}>
            <a href="https://www.linkedin.com/in/vivek-gupta-0889091ba/" taget="_blank"><FaLinkedin size={"30px"}/></a>
            <a href="https://github.com/Vivekgupta96" taget="_blank"><FaGithubSquare size={"30px"}/></a>
            <a href="https://twitter.com/vivekgupta1496" taget="_blank"><FaTwitterSquare size={"30px"}/></a>
        </Flex>
    </Box>
  </>
  )
}

export default AboutMe
