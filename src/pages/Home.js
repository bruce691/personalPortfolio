import { Box, Paper, Stack, styled } from "@mui/material";
import React from "react";
import Description from "../component/Description";
import Image from "../component/Image";
import ngimg from "../component/images/preview-bg.jpg"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Bacg = styled(Box)(({ theme }) => ({
    backgroundAttachment: "fixed",
    backgroundImage: `url(${ngimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height:"750px",
}))
const Home = () => {
  return (
        
    <Bacg>
    <Stack direction="row" sx={{ display: { xs: "block", lg: "inline-flex" } }}>
      <Description />

      {/* <Item>
        <Image />
    </Item> */}
    </Stack>
    
    </Bacg>
  );
};

export default Home;
