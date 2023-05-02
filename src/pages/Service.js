import { Avatar, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import pm from "../component/images/pm.svg";
import fron from "../component/images/front.svg";
import bck from "../component/images/back.svg";
import { Element } from "react-scroll";
const Main = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    padding: "1rem",
  },
}));
const Projt = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  "&.umar": {
    "&::before": {
      position: "absolute",
      top: "1480px",
      content: '""',
      width: "20px",
      height: "20px",
      borderRadius: "20px",
      backgroundColor: "#d50000",
    },
  },
}));
const Service = () => {
  return (
    <>
    <Element name={"Service"} id="service">
      <Main
        sx={{
          padding: "5rem",
          height: "600px",
          background: "#F6F7FC",
        }}
      >
        <Typography sx={{ color: "#858792", mb: "2rem" }} >
          || My Services
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#595757", fontWeight: "500", mb: "2rem" }}
          
        >
          Your Satisfication is our Responsibility.
        </Typography>
        <Projt
          elevation={24}
          sx={{
            padding: "3rem",
            display: "flex",
            justifyContent: "space-around",
            background:
              "conic-gradient(from 180deg, #595757, #a09f9f, #413f3f, #595757 )",
          }}
        >
          <Paper
            elevation={24}
            sx={{
              padding: "3rem",
              background: "linear-gradient(to right top, #212121, #424242)",
            }}
          >
            <Avatar
              src={pm}
              sx={{
                borderRadius: "0",
                filter: "invert(1)",
                marginBottom: "2rem",
              }}
            ></Avatar>
            <Typography variant="h4" color="white" sx={{ mb: "2rem" }}>
              Project Management
            </Typography>
            <Typography color="white">
              <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>DevOps</li>
                <li>JIRA</li>
                <li>Git</li>
              </ul>
            </Typography>
          </Paper>
          <Paper
            elevation={24}
            sx={{
              padding: "3rem",
              background: "linear-gradient(to right top, #212121, #424242)",
              mb: { xs: "20px" },
            }}
          >
            <Avatar
              src={fron}
              sx={{
                borderRadius: "0",
                filter: "invert(1)",
                marginBottom: "2rem",
              }}
            ></Avatar>
            <Typography variant="h4" color="white" sx={{ mb: "2rem" }}>
              Frontend
            </Typography>
            
            <Typography color="white">
              <ul>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Material UI</li>
              </ul>
            </Typography>
          </Paper>
          <Paper
            elevation={24}
            sx={{
              padding: "3rem",
              background: "linear-gradient(to right top, #212121, #424242)",
            }}
          >
            <Avatar
              src={bck}
              sx={{
                borderRadius: "0",
                filter: "invert(1)",
                marginBottom: "2rem",
              }}
            ></Avatar>
            <Typography variant="h4" color="white" sx={{ mb: "2rem" }}>
              Backend
            </Typography>
            <Typography color="white">
              <ul>
                <li>Nodejs</li>
                <li>Expressjs</li>
                <li>MongoDB</li>
                <li>Jwt Auth</li>
                <li>Django</li>
              </ul>
            </Typography>
          </Paper>
        </Projt>
      </Main>
      </Element>
    </>
  );
};

export default Service;
