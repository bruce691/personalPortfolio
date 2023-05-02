import {  Box, Link, Pagination, Paper, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

import usePagination from "../component/Pagination";
// import { default as data } from "./services.json";

import Ract from "../component/images/react-2.svg"
import Js from "../component/images/javascript-2.svg"
import Redx from "../component/images/redux.svg"
import Html1 from "../component/images/loginoption.PNG"
import { Element } from 'react-scroll';
const data = [
    { "id": "1", "name": "GetFix1", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Html1 },
    { "id": "2", "name": "GetFix2", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Ract },
    { "id": "3", "name": "GetFix3", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Ract },
    { "id": "4", "name": "GetFix4", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Redx },
    { "id": "5", "name": "GetFix5", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Js },
    { "id": "6", "name": "GetFix6", "desc": "I njsdd jh jsdd bhbs dbmbj bjhjsbdbjhew k bjbjkj hkb kjjde j", "link": "https://www.google.com", "image": Ract }

]
const Main = styled(Paper)(({ theme })=>({
    [theme.breakpoints.down("md")]:{
      height:"124rem",
      padding:"2rem",
    },
  
  }))
const Project = () => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 3;

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <>
        <Element name={"Portfolio"} id="portfolio">
            <Main
                sx={{
                    padding: "5rem",
                    height: "650px",
                    background: "conic-gradient(from 180deg, #595757, #a09f9f, #413f3f, #595757 )",
                }}>
                <Box>
                    <Typography sx={{ color: "#858792", mb: "2rem" }}>|| Awesome Portfolio</Typography>
                    <Typography variant="h3" sx={{ color: "white", fontWeight: "500", mb: "2rem" }}>My Projects</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection:{xs:"column", md:"row", lg:"row"}, justifyContent: "space-between" }}>
                    {_DATA.currentData().map(v => {
                        return (
                            <Paper elevation={24} sx={[{
                                maxWidth: 330, padding: "1.5rem",
                                background: "linear-gradient(to right top, #212121, #424242)",
                                borderRadius: "1rem",
                                marginBottom:{xs:"2rem"}
                            },
                            (theme) => ({
                                "&:hover": {
                                    background: "linear-gradient(to right top, #212121, #181a1d)",
                                }
                            })]} key={v.id}>
                                <Link href={v.link} target="_blank" sx={{ textDecoration: "none" }}>
                                    <Box sx={{
                                        width: {xs:"270px", md:"330px", lg:"330px"},
                                        height: {xs:"230px", md:"298px", lg:"298px"},
                                    }}>
                                        <Box sx={[{
                                            width: "100%", height: {xs:"230px", md:"298px", lg:"298px"},
                                            backgroundImage: `url(${v.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center center",
                                            transition: "0.4s",
                                            borderRadius:"20px",
                                        },
                                        (theme) => ({
                                            "&:hover": {
                                                transform: "scale(0.9)"
                                            }
                                        })
                                        ]}>
                                        </Box>
                                    </Box>
                                    <Typography variant="h6" sx={{ marginTop: "20px", color: "#858792", }}>{v.name}</Typography>
                                    <Typography variant="subtitle2" sx={{ marginTop: "20px", color: "white",fontSize:"20px", fontWeight:"800" }}>{v.desc}</Typography>
                                </Link>
                            </Paper>
                        );
                    })}
                </Box>
                <Pagination
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                    sx={{display:"flex", justifyContent:"center", mt:3, color:"white"}}
                />
            </Main>
            </Element>
        </>
    )
}

export default Project