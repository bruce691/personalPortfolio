import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ava from "../component/images/man.jpg"
import { Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 300,
    height: 300,
    // backgroundImage: `url(${ava})`,
    // backgroundSize: "cover",
    "&:hover .umar": {
        transform: "rotateX(0deg)",
        transition: '0.5s'
    }
}));

export default function Portfolio() {
    return (
       
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <Item elevation={24}>
                        <Box className="umar" sx={{
                            width: "100%", height: "100%", transformOrigin: "bottom",
                            backgroundColor: "gray", opacity: 1, transform: "rotateX(0deg)"
                        }}  >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={ava}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box className="umar" sx={{
                            width: "100%", height: "100%", transformOrigin: "top", mt:"-300px",
                            backgroundColor: "gray", opacity: 0.9, transform: "rotateX(90deg)",
                           
                        }}  >
                            <Typography variant="body1" color="white" p={5}>Lizards are a widespread group of squamate</Typography>
                        <Button variant='contained' href="https://www.google.com" target="_blank">Visit Website</Button>
                        </Box>
                    </Item>
                </Box>
       
    );
}
