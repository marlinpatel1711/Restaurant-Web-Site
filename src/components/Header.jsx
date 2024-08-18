import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import '../style/Header.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // hndle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1,my:2 }}> <FastfoodIcon> </FastfoodIcon>My Restaurant</Typography>
            <Divider></Divider>
                <ul className="mobile-navigation">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contant'>Contact</Link>
                    </li>
                </ul>
           
        </Box>
    )
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar >
                        <IconButton onClick={handleDrawerToggle} color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" },"& svg:hover": {color: "goldenrod", }}}><MenuIcon /></IconButton>
                        <Typography color={"goldenrod"} variant="h6" component={"div"} sx={{ flexGrow: 1 }}> <FastfoodIcon> </FastfoodIcon>My Restaurant</Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li className='hower'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='hower'>
                                    <Link to='/menu'>Menu</Link>
                                </li>
                                <li className='hower'>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li className='hower'>
                                    <Link to='/contant'>Contact</Link>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component={"nav"}>
                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" }, }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar></Toolbar>
                </Box>
            </Box>
        </>
    )
}
