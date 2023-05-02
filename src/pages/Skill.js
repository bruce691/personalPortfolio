import { Avatar, Box, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Element } from 'react-scroll'
import CircularProgress from '@mui/material/CircularProgress';
import Html from "../component/images/html-1.svg"
import Ract from "../component/images/react-2.svg"
import Js from "../component/images/javascript-2.svg"
import Redx from "../component/images/redux.svg"
import Nod from "../component/images/nodejs-icon.svg"
import Mui from "../component/images/material-ui-1.svg"
const Skil = styled(Paper)(({ theme }) => ({
  width: "249px",
  height: "209px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  transition: "background 1s transform 0.1s",
  [theme.breakpoints.down("sm")]:{
    width: "282px",
    height: "150px",
  },
  "&:hover": {
    transform: "scale(1.1)",
    background: "conic-gradient(from 180deg, #595757, #a09f9f, #413f3f, #595757 )",

  }
}))

const Skill = () => {
  return (
    <Element name={"Skill"} id="skill">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        background: "linear-gradient(to right top, #6E07F3,  #f6f6f6)",
        height: {md:"100vh"},
        borderBottomLeftRadius: {md:"300px",xs:"0px"},
        paddingTop: "30px"
      }}>
        <Paper elevation={16}
          sx={{
            m: {md:"1rem 28rem", xs:"1rem 5rem"},
            p: "10px",
            mb: "3rem",
            background: "linear-gradient(to right top, #6E07F3,  #f6f6f6)",
          }}>
          <Typography variant='h1'
            sx={{
              fontWeight: 800,
              color: "white",
              fontSize: 30
            }}>Professional Skills</Typography></Paper>
        <Grid container spacing={2} sx={{ pl: 10, justifyContent: "center" }}>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Html} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={90} size={70}
                  sx={{ color: "#E8471C" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    90%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Js} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={70} size={70}
                  sx={{ color: "black" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    70%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Ract} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={85} size={70}
                  sx={{ color: "cyan" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    85%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Redx} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={60} size={70}
                  sx={{ color: "#6E07F3" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    60%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Nod} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={70} size={70}
                  sx={{ color: "green" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    70%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
          <Grid item xs={12} md={3}>
            <Skil elevation={24}>
              <Avatar src={Mui} sx={{ borderRadius: "0", width: "100px", height: "100px" }}></Avatar>
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={60} size={70}
                  sx={{ color: "#2596be" }}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    60%
                  </Typography>
                </Box>
              </Box>
            </Skil>
          </Grid>
        </Grid>
      </Box>
    </Element>
  )
}

export default Skill