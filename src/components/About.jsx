import React from 'react'
import { Grid, Box, Text, Image,Flex,Button } from '@chakra-ui/react'
import {FaArrowAltCircleDown} from "react-icons/fa";
import vivek_pic from "../assets/images/vivek_img.png";
const About = () => {
    return (
        <>
            <Grid pt={"100px"} m="auto" templateColumns={{ sm:"1fr", md: "1fr 1fr" }} w={{md:"80%",lg:"80%",xl:"80%",sm:"95%"}} mt={5} gap={5}>
                <Box order={{sm:2,md:1,base:2,lg:1}} textAlign={{sm:"center",base:"center",md:"left",lg:"left"}}>
                    <Text fontSize={{md:"3xl",lg:"4xl",xl:"4xl",sm:"2xl",base:"2xl"}} fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient={"linear-gradient(90deg, rgba(79,0,251,1) 0%, rgba(255,0,0,1) 95%);"} bgClip="text">Vivek Gupta</Text>
                    <Text fontSize={{md:"3xl",lg:"4xl",xl:"4xl",sm:"2xl",base:"2xl"}} fontWeight="semibold">A Full Stack  Web Developer</Text>
                    <Text fontSize={{md:"3xl",lg:"4xl",xl:"4xl",sm:"2xl",base:"2xl"}} fontWeight="semibold">Java Developer</Text>

                    <a href="https://drive.google.com/file/d/1rg-plHT55XtpuRBsZ2A_gfUU-YUwIRwR/view?usp=sharing" target='_black'><Button mt={"5px"} bg={"blue.400"} color={"white"} _hover={{cursor:"pointer"}}  as={'b'}><Flex alignItems={'center'} gap="1">RESUME <FaArrowAltCircleDown/></Flex></Button></a>
                </Box>
                <Flex justifyContent={"center"} order={{sm:1,md:1,base:1,lg:1}}>
                    <Image
                        borderRadius='2xl'
                        width={{sm:"250px",md:"300px",base:"200px",lg:"250px"}}
                        src={vivek_pic}
                    />
                </Flex>
            </Grid>
        </>
    )
}

export default About
