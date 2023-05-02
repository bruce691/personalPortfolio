import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import ava from "../component/images/bg.jpg"
const Bg = () => {
    const Bacg = styled(Box)(({ theme }) => ({
        backgroundAttachment: "fixed",
        backgroundImage: `url(${ava})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height:"650px",
    }))
    return (
        <Bacg></Bacg>
    )
}

export default Bg