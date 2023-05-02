import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Typography, Button } from '@mui/material';
import ava from "../component/images/ava.png"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    display: "flex",
    justifyContent:'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]:{
        display:"none",
      },
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'left',
    padding:"30px",
    paddingBottom:"50px",
    [theme.breakpoints.down("sm")]:{
        padding:"50px",
      },

}));
const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} >
                <Grid item  md={6} >
                    <Item>
                        <Avatar src={ava} sx={{width:356, height:378}}></Avatar>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item2>
                        <Typography variant='subtitle'>ABOUT ME</Typography>
                        <Typography variant="h4" sx={{pt:3, pb:3}}>PERSONAL DETAILS</Typography>
                        <Typography paragraph sx={{pb:2}}>Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Typography>
                        <Button  sx={{color:"white",  background: "linear-gradient(to right top, #212121, #424242)",}}>Veiw Full Detail</Button>
                    </Item2>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default About