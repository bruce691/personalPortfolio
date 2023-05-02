import { AppBar, Button, IconButton, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
// import { blueGrey } from '@mui/material/colors';
//const color = blueGrey[900];
const pages = ["Home", 'About', 'Portfolio', 'Skills'];
const StyledTool = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",

}))
const Search = styled("div")(({ theme }) => ({
    padding: "0 10px",
}))
const Icons = styled(Box)(({ theme }) => ({
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}))
const Navmenu = styled(Box)(({ theme }) => ({
}))
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <AppBar sx={{ position: "sticky", background: "linear-gradient(to right top, #212121, #424242)"}} id="nav">
            <StyledTool>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "none", md: "block" } }} >
                    NC Portfolio
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    {open === true?
                    <IconButton
                        
                        onClick={handleClose}
                        color="inherit"
                    >
                        <GiHamburgerMenu />
                    </IconButton>:
                    <IconButton
                       
                        onClick={handleOpen}
                        color="inherit"
                    >
                        <GiHamburgerMenu />
                    </IconButton>}
                    {open === true?
                    <Navmenu
                        sx={{
                            position:"absolute",
                            top:"70px",
                            width:"100%",
                            height:"300px",
                            background: "linear-gradient(to right top, #212121, #424242)",
                            display: open === true ?"block":"none",
                           
                        }}

                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleClose}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Navmenu>:""}
                </Box>
                <Typography className="typoud" variant='h6' sx={{ flexGrow: 1, display: { xs: "block", sm: "none", md: "none" } }} >
                    ND Portfolio
                </Typography>
                <Search sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <Link activeClass="active" smooth={true}  offset={-70} duration={500} to={"Home"}>
                        <Button sx={{ my: 2, color: 'white' }}>Home</Button>
                    </Link>
                    <Link activeClass="active" smooth={true}  offset={-70} duration={500} to={"About"}>
                        <Button sx={{ my: 2, color: 'white' }}>About</Button>
                    </Link>
                    <Link activeClass="active" smooth={true}  offset={-70} duration={500} to={"Service"}>
                        <Button sx={{ my: 2, color: 'white' }}>Services</Button>
                    </Link>
                    <Link activeClass="active" smooth={true}  offset={-70} duration={500} to={"Portfolio"}>
                        <Button sx={{ my: 2, color: 'white' }}>Portfolio</Button>
                    </Link>
                </Search>
                <Icons>
                <Link activeClass="active" smooth={true}  offset={-70} duration={500} to={"Contact"}>
                    <Button  sx={{ my: 2, color: "white", border: "1px solid white" }}>
                        Contact
                    </Button>
                    </Link>
                </Icons>
            </StyledTool>

        </AppBar>
    )
}

export default Navbar