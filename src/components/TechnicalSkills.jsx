import { Box, Text, Flex, Image, Spacer, Grid } from "@chakra-ui/react";
import React from "react";
import html from "../assets/images/html.webp";
import css from "../assets/images/css.png";
import javaScript from "../assets/images/javascript.png";
import react from "../assets/images/React.png";

import java from "../assets/images/java.png";
import springboot from "../assets/images/springboot.png";
import hibernate from "../assets/images/hibernate.png";
import mysql from "../assets/images/mysql.png";
import github from "../assets/images/github.png";
import git from "../assets/images/git.png";

import vscode from "../assets/images/vcosde.png";
import intelli from "../assets/images/intelli.png";
import GitHubCalendar from "react-github-calendar";
import { FaCommentAlt, FaChild, FaPeopleCarry, FaUsers } from "react-icons/fa";
import Projects from "./Projects";
const TechnicalSkills = () => {
  return (
    <>
      <div id="skills" className="skills">
        <Box
          pt={"40px"}
          w={{ md: "80%", lg: "80%", xl: "80%", sm: "90%", base: "90%" }}
          m={"auto"}
          textAlign={"center"}
        >
          <Text color={"blue.600"} fontSize={"4xl"} fontWeight={"bold"}>
            Technical Skills
          </Text>
          <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>
            BACK END
          </Text>

          <br />
          <br />
          <br />
          <Box mt={"20px"}>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={java}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "10px",
                    base: "10px",
                  }}
                >
                  JAVA
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={springboot}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  Spring Boot
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={hibernate}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  Hibernate
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={mysql}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  MySQL
                </Text>
              </Box>
            </Flex>
          </Box>
          <br />
          <br />
          <br />

          <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>
            FRONT END
          </Text>
          <br />
          <br />
          <br />
          <Box w="80%" m="auto">
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={html}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  HTML5
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={css}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  CSS
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={javaScript}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  JavaScript
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={react}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  React
                </Text>
              </Box>
            </Flex>
          </Box>
          <br />
          <br />
          <br />

          <Text mt={"20px"} fontSize={"xl"} fontWeight={"semibold"}>
            OTHER DEV TOOLS
          </Text>
          <br />
          <br />
          <br />
          <Box
            w={{ md: "30%", lg: "30%", xl: "30%", sm: "60%", base: "60%" }}
            m="auto"
          >
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={vscode}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  VS CODE
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={intelli}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  INTELLIJE
                </Text>
              </Box>
            </Flex>
          </Box>
          <br />
          <br />
          <br />
          <Text mt={"30px"} fontSize={"xl"} fontWeight={"semibold"}>
            VERSION CONTROL
          </Text>
          <br />
          <br />
          <Box
            w={{ md: "30%", lg: "30%", xl: "30%", sm: "60%", base: "60%" }}
            m="auto"
          >
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={github}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  Git Hub
                </Text>
              </Box>
              <Box
                w={{
                  md: "70px",
                  lg: "70px",
                  xl: "70px",
                  sm: "55px",
                  base: "55px",
                }}
              >
                <Image w={"100%"} src={git}></Image>
                <Text
                  fontSize={{
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                    sm: "11px",
                    base: "11px",
                  }}
                >
                  Git
                </Text>
              </Box>
            </Flex>
          </Box>
          <br />
          <br />
        </Box>

        <br />
        <br />
        <Text
          color={"blue.600"}
          textAlign={"center"}
          fontSize={"4xl"}
          fontWeight={"bold"}
        >
          Soft Skills
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
                <FaCommentAlt size={"40px"} />
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
                  Communication
                </Text>
              </Flex>
            </Box>
            <Box p={"40px"}>
              <Flex justifyContent={"center"}>
                <FaChild size={"40px"} />
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
                  Adaptibility
                </Text>
              </Flex>
            </Box>
            <Box p={"40px"}>
              <Flex justifyContent={"center"}>
                <FaPeopleCarry size={"40px"} />
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
                  Team work
                </Text>
              </Flex>
            </Box>
            <Box p={"40px"}>
              <Flex justifyContent={"center"}>
                <FaUsers size={"40px"} />
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
                  Leadership
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Box>
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
            <Box
              border={"4px solid #805AD5"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }
              p={"40px"}
              borderRadius={"10px"}
            >
              <Flex justifyContent={"center"}>
                <Text as={"b"} fontSize={"20px"}>
                  1200+
                </Text>
              </Flex>
              <Flex justifyContent={"center"}>
                <Text
                  fontSize={{
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                    sm: "14px",
                    base: "14px",
                  }}
                >
                  Hours of coding
                </Text>
              </Flex>
            </Box>
            <Box
              border={"4px solid #805AD5"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }
              p={"40px"}
              borderRadius={"10px"}
            >
              <Flex justifyContent={"center"}>
                <Text as={"b"} fontSize={"20px"}>
                  300+
                </Text>
              </Flex>
              <Flex justifyContent={"center"}>
                <Text
                  fontSize={{
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                    sm: "14px",
                    base: "14px",
                  }}
                >
                  Problem solved
                </Text>
              </Flex>
            </Box>
            <Box
              border={"4px solid #805AD5"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }
              p={"40px"}
              borderRadius={"10px"}
            >
              <Flex justifyContent={"center"}>
                <Text as={"b"} fontSize={"20px"}>
                  200+
                </Text>
              </Flex>
              <Flex justifyContent={"center"}>
                <Text
                  fontSize={{
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                    sm: "14px",
                    base: "14px",
                  }}
                >
                  Soft Skill Session
                </Text>
              </Flex>
            </Box>
            <Box
              border={"4px solid #805AD5"}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }
              p={"40px"}
              borderRadius={"10px"}
            >
              <Flex justifyContent={"center"}>
                <Text as={"b"} fontSize={"20px"}>
                  10+
                </Text>
              </Flex>
              <Flex justifyContent={"center"}>
                <Text
                  fontSize={{
                    md: "18px",
                    lg: "18px",
                    xl: "18px",
                    sm: "14px",
                    base: "14px",
                  }}
                >
                  Projects Built
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Box>
        <br />
        <br />
        <Projects />
      </div>
    </>
  );
};

export default TechnicalSkills;
