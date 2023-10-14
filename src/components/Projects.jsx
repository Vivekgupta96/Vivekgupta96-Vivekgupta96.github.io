import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import asrs from "../assets/images/asrs.png";
import ecom from "../assets/images/ecom.png";
import gadget from "../assets/images/gadget.png";
import sandstrom from "../assets/images/sandstrom.png";
import { FaChrome, FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Box
        w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}
        m={"auto"}
      >
        <Text
          color={"blue.600"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Projects
        </Text>
        <br />
        <br />
        <Flex
          gap={10}
          flexDirection={{
            md: "row",
            lg: "row",
            xl: "row",
            sm: "column",
            base: "column",
          }}
        >
          <Box w={"100%"}>
            <Image
              src={ecom}
              borderRadius={"10px"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
            />
          </Box>
          <Box w={"100%"}>
            <Text fontSize={"25px"} as={"b"}>
              E-COMMERSE WEBSITE
            </Text>
            <br />
            <Text fontSize={"18px"}>
              E-Commerce Application using Spring Boot and React. where
              customers can buy products, and the admin can sell their products.
            </Text>
            <br />
            <Text fontSize={"18px"}>
              An Individual project built and executed in 5 Days.
            </Text>
            <br />
            <Text fontSize={"25px"} as={"b"}>
              Tech Stack
            </Text>
            <Text>
              JAVA | SPRING BOOT | JAVASCRIPT | REACTJS | HIBERNATE | MYSQL
            </Text>
            <br />
            <Flex gap={8}>
              <Link href="https://eccomers96.netlify.app/" target="_blank">
                <FaChrome size={"30px"} />
              </Link>
              <Link
                href="https://github.com/Vivekgupta96/eCommerce-Application"
                target="_blank"
              >
                <FaGithub size={"30px"} />
              </Link>
            </Flex>
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <Flex
          gap={10}
          flexDirection={{
            md: "row",
            lg: "row",
            xl: "row",
            sm: "column-reverse",
            base: "column-reverse",
          }}
        >
          <Box w={"100%"}>
            <Text fontSize={"25px"} as={"b"}>
              STUDENT REGISTRATION SYSTEM
            </Text>
            <br />
            <Text fontSize={"18px"}>
              It is an automatic registration system for students to register
              themselves for different courses in an institut.
            </Text>
            <br />
            <Text fontSize={"18px"}>
              An Individual project built and executed in 5 Days.
            </Text>
            <br />
            <Text fontSize={"25px"} as={"b"}>
              Tech Stack
            </Text>
            <Text>JAVA | MYSQL | HIBERNATE | MAVEN </Text>
            <br />
            <Flex gap={8}>
              <Link
                href="https://drive.google.com/file/d/1wF3tl2Wa5bbvxUgYHLluGRACT3Xb2ex0/view"
                target="_blank"
              >
                <FaChrome size={"30px"} />
              </Link>
              <Link
                href="https://github.com/Vivekgupta96/Automatic-Student-Registration-System"
                target="_blank"
              >
                <FaGithub size={"30px"} />
              </Link>
            </Flex>
          </Box>
          <Box w={"100%"}>
            <Image
              src={asrs}
              borderRadius={"10px"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
            />
          </Box>
        </Flex>

        <br />
        <br />
        <br />

        <Flex
          gap={10}
          flexDirection={{
            md: "row",
            lg: "row",
            xl: "row",
            sm: "column",
            base: "column",
          }}
        >
          <Box w={"100%"}>
            <Image
              src={sandstrom}
              borderRadius={"10px"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
            />
          </Box>
          <Box w={"100%"}>
            <Text fontSize={"25px"} as={"b"}>
              SANDSTROM
            </Text>
            <br />
            <Text fontSize={"18px"}>
              It is a E-Commerce website that sells clothing,
              shoes,accessories and beauty products for women, men, and children
            </Text>
            <br />
            <Text fontSize={"18px"}>
              A Colleborative project built with team of 4 member and executed in 5 Days.
            </Text>
            <br />
            <Text fontSize={"25px"} as={"b"}>
              Tech Stack
            </Text>
            <Text>
               JAVASCRIPT | HTML | CSS 
            </Text>
            <br />
            <Flex gap={8}>
              <Link href="https://sandstorm-gsvr.netlify.app/" target="_blank">
                <FaChrome size={"30px"} />
              </Link>
              <Link
                href="https://github.com/Vivekgupta96/Sandstorm"
                target="_blank"
              >
                <FaGithub size={"30px"} />
              </Link>
            </Flex>
          </Box>
        </Flex>
        <br />
        <br />
        <br />
        <Flex
          gap={10}
          flexDirection={{
            md: "row",
            lg: "row",
            xl: "row",
            sm: "column-reverse",
            base: "column-reverse",
          }}
        >
          <Box w={"100%"}>
            <Text fontSize={"25px"} as={"b"}>
            GADGETS
            </Text>
            <br />
            <Text fontSize={"18px"}>
            It is a technology news website Which provides Information about all gadget and related news.
            </Text>
            <br />
            <Text fontSize={"18px"}>
              An Individual project built and executed in 5 Days.
            </Text>
            <br />
            <Text fontSize={"25px"} as={"b"}>
              Tech Stack
            </Text>
            <Text>
               JAVASCRIPT | HTML | CSS 
            </Text>
            <br />
            <Flex gap={8}>
              <Link
                href="https://thriving-parfait-923c7f.netlify.app/"
                target="_blank"
              >
                <FaChrome size={"30px"} />
              </Link>
              <Link
                href="https://github.com/Vivekgupta96/Gadgets-Informations-Website"
                target="_blank"
              >
                <FaGithub size={"30px"} />
              </Link>
            </Flex>
          </Box>
          <Box w={"100%"}>
            <Image
              src={gadget}
              borderRadius={"10px"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              }
            />
          </Box>
        </Flex>
      </Box>
      <br />
    </div>
  );
};

export default Projects;
