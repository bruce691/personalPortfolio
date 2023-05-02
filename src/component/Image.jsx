import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ava from "./images/web.svg"
const Image = () => {
  return (
    <Box sx={{pt:{xs:10, md:15}}}>
      <Avatar src={ava}  sx={{ width: {xs:400, md:475}, height: {xs:350, md:475} }}>
      </Avatar>
      
    </Box>
  )
}

export default Image