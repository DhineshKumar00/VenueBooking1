import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, Toolbar, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} style={{padding:'200px 0px'}}>
      <Typography
        color={"black"}
        variant='h6'
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      {/* <Link className="v-navbar" to="/">Venue<span className="color-b">Booker</span></Link> */}

      </Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        {/* <li>
          <NavLink to={"/Hall"}>Hall</NavLink>
        </li> */}
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
      <Box >
        <AppBar component={'nav'} sx={{ bgcolor: 'White ' }}>
          <Toolbar>
            
            <Typography
              color={'transparent'}
              variant='h6'
              component="div"
              sx={{ flexGrow: 5 }}
            >
            <Link className="v-navbar" to="/">Venue<span className="color-b">Booker</span></Link>

            </Typography>

            <ul className="navigation-menu">
              <li>
                <NavLink   to={"/"} className="navtxt">Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="navtxt">About</NavLink>
              </li>
              <li>
                <NavLink to={"/product"} className="navtxt">Hall</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className="navtxt">Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/login"} className="navtxt">Login/Register</NavLink>
              </li>
              
            </ul>

          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "300px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ p: 1 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
