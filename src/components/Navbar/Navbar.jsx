import React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MedifyLogo from '../../assets/MedifyLogo.png';
import CloseIcon from "@mui/icons-material/Close";
import './Navbar.css';

export default function Navbar () {

  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
          <Box>
              <Typography component="div" className='navbar-style'>
              The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
              </Typography>
              <div className="navbar-container">
                  <Stack                 
                   direction="row" 
                   spacing={2}
                   style={{ alignItems:"center" }}
                   >
                  <div>
                  <Link className='navbarLogo' to="/">
                    <img src={MedifyLogo} alt="MedifyLogo" height={27} />
                  </Link>
                  </div>
                  <div className="navbarLinks">
                   <Stack
                   direction={{ xs:"column", md:"row"}}
                   spacing={4}
                   alignItems={{ xs:"flex-start", md:"center" }}
                   pt={{ xs:12, md:1 }}
                   pb={{ xs:4, md:1 }}
                   px={{ xs: 4, md:0 }}
                  style={{ marginLeft:"393px"}}
                   >
                  
                    <Link style={{ color: "#102851", textDecoration: "none", }}>Find Doctors</Link>
                    <Link style={{ color: "#102851", textDecoration: "none", }} to="/search">Hospitals</Link>
                    <Link style={{ color: "#102851", textDecoration: "none", }}>Medicines</Link>
                    <Link style={{ color: "#102851", textDecoration: "none", }}>Surgeries</Link>
                    <Link style={{ color: "#102851", textDecoration: "none", }}>Software for Provider</Link>
                    <Link style={{ color: "#102851", textDecoration: "none", }}>Facilities</Link>


                    <Link to="/my-bookings">
            <button className="navbar-button">My Bookings</button>
            </Link>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
                   </Stack>
                   </div>
                   </Stack>
              </div>

              
          </Box>
        </div>
      );

}