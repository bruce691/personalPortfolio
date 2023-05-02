import React from 'react'
import Portfo from '../component/Portfolio'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Element } from 'react-scroll';
const Portfolio = () => {
    return (
        <>
        <Element name={"Portfolio"} id="portfolio">
        <Typography variant='h1' sx={{ mt:5, display:'flex', justifyContent:'center', fontWeight:800,    color: "rgb(20, 28, 58)", fontSize:25}}>My Recent Work</Typography>
        <Typography variant='h2' sx={{display:'flex', justifyContent:'center', fontWeight:400, fontSize:20,
        fontFamily: "europa, sans-serif",
        lineHeight:2,
    }}>Here are a few past design projects I've worked on. Want to see more?</Typography>
        
        <Grid container spacing={2} sx={{ p: 6 }}>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
            <Grid item xs={12} md={4}>
                <Portfo />
            </Grid>
        </Grid >
        </Element>
        </>
    )
}

export default Portfolio