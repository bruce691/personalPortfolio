import * as React from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Cont from "../component/Contact"
import ContL from "../component/ContactLeftSide"
import { Typography } from '@mui/material';
import { Element } from 'react-scroll';
const Item = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(to right top, #212121, #424242)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]:{
    marginLeft:"-2rem",
    width:"18rem"
  },
}));

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
    <div style={{padding:"5rem", background: "conic-gradient(from 180deg, #595757, #a09f9f, #413f3f, #595757 )"}}>
      <Typography variant='h3' sx={{display:"flex", justifyContent:"center", alignItems:"center", 
    fontWeight:"800",
    marginBottom:"3rem",
    color:"white",
    }}>Contact With Us</Typography>
      <Stack
     direction={{ xs: 'column', sm: 'row' }}
     spacing={{ xs: 1, sm: 2, md: 4 }}
     justifyContent="center"
      >
        <Item elevation={20}><ContL /></Item>
        <Item elevation={20}><Cont /></Item>
        
      </Stack>
    </div>
    </Element>
  );
}
