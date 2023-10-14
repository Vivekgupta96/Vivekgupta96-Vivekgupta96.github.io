import React from "react";
import { Box, Text, Flex, Image, Spacer, Grid } from "@chakra-ui/react";
import Resume from "../assets/Vivek-Gupta-Resume.pdf";


const Contact = () => {
  return (
    <div className="contacts" id="contacts1">
      <br />
      <br />
      <Text
        color={"blue.600"}
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"bold"}
      >
        Contact
      </Text>
      <br />
      <br />
      <Box
        mt={"20px"}
        w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}
        m={"auto"}
      >
        <Grid
          w={"100%"}
          justifyContent={"space-between"}
          gridTemplateColumns={{
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            sm: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={5}
        >
          <Box p={"40px"}>
            <Flex justifyContent={"center"}>
              <Text
                 color={"blue.900"}
                 textAlign={"center"}
                 fontSize={"2xl"}
                 fontWeight={"bold"}
              >Email</Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Text
                fontSize={{
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                  sm: "16px",
                  base: "16px",
                }}
              >
                vivekg0691@gmail.com
              </Text>
            </Flex>
          </Box>
          <Box p={"40px"}>
            <Flex justifyContent={"center"}>
              <Text
                 color={"blue.900"}
                 textAlign={"center"}
                 fontSize={"2xl"}
                 fontWeight={"bold"}
              >Mobile</Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Text
                fontSize={{
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                  sm: "16px",
                  base: "16px",
                }}
              >
                +917727930691
              </Text>
            </Flex>
          </Box>
          <Box p={"40px"}>
            <Flex justifyContent={"center"}>
              <Text
                 color={"blue.900"}
                 textAlign={"center"}
                 fontSize={"2xl"}
                 fontWeight={"bold"}
              >LinkedIn</Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Text
                fontSize={{
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                  sm: "16px",
                  base: "16px",
                }}

               
              >
               <a href="https://www.linkedin.com/in/vivek-gupta-0889091ba/" target='_black'>LinkedIn Profile</a>
              </Text>
            </Flex>
          </Box>
          <Box p={"40px"}>
            <Flex justifyContent={"center"}>
              <Text
                 color={"blue.900"}
                 textAlign={"center"}
                 fontSize={"2xl"}
                 fontWeight={"bold"}
              >GitHub</Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Text
                fontSize={{
                  md: "18px",
                  lg: "18px",
                  xl: "18px",
                  sm: "16px",
                  base: "16px",
                }}
              >
               <a href="https://github.com/Vivekgupta96" target='_black'>Github Profile</a>
              </Text>
            </Flex>
          </Box>
          
        </Grid>
      </Box>
      <br />
      <br />
    </div>
  );
};

export default Contact;
