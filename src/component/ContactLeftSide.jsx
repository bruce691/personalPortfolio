import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Con2 from "./images/connact.jpg"
import { FaFacebookF } from "react-icons/fa"
import { FiTwitter, FiLinkedin } from "react-icons/fi"
const ContactLeftSide = () => {
  return (
    <Paper elevation={24} sx={{
      width:{xs:"100%", md:"430px"},
      height: "750px",
      background: "linear-gradient(to right top, #212121, #424242)",
      padding: {xs:"10px", md:"20px"},
    }}>
      <Box>
        <img src={Con2} alt="umae" style={{ width: '100%', height: "50%", borderRadius: "20px", lineHeight: "1.5rem" }}></img>
      </Box>
      <Box mt={3} sx={{ textAlign: "left" }}>

        <Typography variant='h4' sx={{ color: "white", fontWeight: "800", lineHeight: "44px", fontSize: "29px", marginBottom: "1rem" }}>Nadine Colon</Typography>
        <Typography sx={{ color: "white", fontWeight: "600", lineHeight: "1.5rem", marginBottom: "2rem" }}>Full Stack Software Engineer & Developer</Typography>
        <Typography sx={{ color: "white", fontWeight: "600", lineHeight: "1.5rem", marginBottom: "2rem" }}>I am available for freelance work. Connect with me via and call in to my account.</Typography>
        <Typography variant='subtitle2' sx={{ color: "white", lineHeight: "1.5rem" }}>
          Phone : <span> +923413455144</span>
        </Typography>
        <Typography variant='subtitle2' sx={{ color: "white", lineHeight: "1.5rem", marginBottom: "2rem" }}>
          Email : <span> nataliehall179@gmail.com</span>
        </Typography>
        <Typography variant='subtitle1' sx={{ color: "white", lineHeight: "1.5rem", marginBottom: "1rem" }}>
          Find With Me
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "280px" }}>
          <Button sx={{ background: "linear-gradient(to right top,#413f3f, #595757)", padding: "1rem", fontSize: "1.2rem" }}><FaFacebookF /></Button>
          <Button sx={{ background: "linear-gradient(to right top,#413f3f, #595757)", padding: "1rem", fontSize: "1.2rem" }}><FiTwitter /></Button>
          <Button sx={{ background: "linear-gradient(to right top,#413f3f, #595757)", padding: "1rem", fontSize: "1.2rem" }}><FiLinkedin /></Button>
        </Box>
      </Box>

    </Paper>
  )
}

export default ContactLeftSide