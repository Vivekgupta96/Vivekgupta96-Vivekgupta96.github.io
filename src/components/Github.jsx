import { Box, Text, Flex, Image, Spacer, Grid } from "@chakra-ui/react";
import React from "react";

import GitHubCalendar from "react-github-calendar";
import { FaCommentAlt, FaChild, FaPeopleCarry, FaUsers } from "react-icons/fa";

const Github = () => {
  return (
    <>
      <Box
        pt={"40px"}
        w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}
        m={"auto"}
        textAlign={"center"}
      >
        <Text 
        
        color={"blue.600"}
        fontSize={"3xl"}
        fontWeight={"bold"}
        textAlign={"center"}>
          GITHUB STATS
        </Text>
        <br />
        <Flex
          flexDirection={{
            md: "row",
            lg: "row",
            xl: "row",
            sm: "column",
            base: "column",
          }}
          justifyContent={"center"}
          gap={"30px"}
        >
          <p align="center">
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=vivekgupta96&"
              alt="vivekgupta96"
            />
          </p>
          <p align="center">
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=vivekgupta96&show_icons=true&locale=en"
              alt="vivekgupta96"
            />
          </p>
        </Flex>
        <br />
        <p align="center">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=vivekgupta96&show_icons=true&locale=en&layout=compact"
            alt="vivekgupta96"
            width={"350px"}
          />
        </p>
      </Box>

      <br />
      <Text
        textAlign={"center"}
        mt={"30px"}
        fontSize={"xl"}
        fontWeight={"semibold"}
      >
        GITHUB STATS
      </Text>
      <br />
      <br />
      <Flex
        w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}
        justifyContent={"center"}
        m={"auto"}
      >
        <GitHubCalendar username="vivekgupta96" />
      </Flex>

      <br />
        <br />
    </>
  );
};
export default Github;
