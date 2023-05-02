import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import ava from "../component/images/about.png";

const About = () => {
  const MainDiv = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ava})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "fit",
    backgroundPosition: "right center",
    height: "650px",
    display: "flex",
    
    alignItems: "center",
  }));
  return (
    <Element name={"About"} id="about">
    <MainDiv sx={{flexDirection:{xs:"column", sm:"column"}}}>
      <Box
        sx={{
          backgroundColor: "#212121",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          width: 800,
          height: 500,
          ml: { md: "250px", lg: "250px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mr: "400px",
            background: "linear-gradient(145deg,#f81f01,#ee076e )",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          ABOUT ME
        </Typography>
        <Typography
          variant="h2"
          sx={{
            m: " 20px 200px 0 115px",
            fontSize: "1.25rem",
            fontWeight: 300,
            lineHeight: 1.5,

            color: "white",
          }}
        >
          If you're looking for a full stack web developer and software engineer with experience in the MERN stack, software development methodologies, and project management tools, look no further. I would love to work with you to bring your ideas to life and help your business succeed in the digital world.
        </Typography>
        <Button
          sx={{ my: 4, color: "white", border: "1px solid white", mr: "440px", px:4}}
        >
          Hire me
        </Button>
      </Box>
    </MainDiv>
    </Element>
  );
};

export default About;
