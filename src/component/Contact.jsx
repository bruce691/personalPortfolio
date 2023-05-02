import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Paper elevation={24} sx={{
      width: "620px",
      height: "750px",
      background: "linear-gradient(to right top, #212121, #424242)",
      padding: '20px',
    }}>
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={6} mb={2}>
          <FormControl sx={{ color: "#a0a8b3", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
            <InputLabel htmlFor="my-input" sx={{ color: "#a0a8b3"}}>Your Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" sx={{ color: "#a0a8b3"}}d/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} >
        <FormControl sx={{  color: "#a0a8b3", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
            <InputLabel htmlFor="my-input" sx={{ color: "#a0a8b3"}}>Phone</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" sx={{ color: "#a0a8b3"}} />
          </FormControl>
        </Grid>
        <Grid item md={12} mb={2}>
        <FormControl sx={{ width:"80%",color: "#a0a8b3", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
            <InputLabel htmlFor="my-input" sx={{ color: "#a0a8b3"}}>Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text"sx={{ color: "#a0a8b3"}} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} mb={2}>
        <FormControl sx={{width:"80%", color: "#a0a8b3", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
            <InputLabel htmlFor="my-input" sx={{ color: "#a0a8b3"}}>Subject</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" sx={{ color: "#a0a8b3"}}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} mb={2}>
        <FormControl sx={{width:"80%", color: "#a0a8b3", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
            <InputLabel htmlFor="my-input" sx={{ color: "#a0a8b3"}}>Your Message</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" sx={{height:"150px",color: "#a0a8b3"}}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
        <Button sx={{width:"80%", color: "#a0a8b3",padding:"8px", background: "linear-gradient(to right top, #212121, #424242)", border: "2px solid  #212121" }}>
Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Contact