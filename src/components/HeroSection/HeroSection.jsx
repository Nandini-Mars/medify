import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import hero_image from '../../assets/hero_image.png';
import 'swiper/css'
import './HeroSection.css'

export default function HeroSection(){
    return(
        <>
        <div style={{backgroundColor:"#E7F0FF"}}>
                <div className="hero_image">
                    <Stack
                    direction={{ xs:"column", md:"row"}} 
                    spacing={6} 
                    alignItems="center" pt={2}
                    >
                        <Box>
                            <Typography variant="h3" component="h1">Skip the travel! Find Online</Typography>
                            <Typography variant="h1" component="h1" mb={1}>Medical <span style={{ color:"#2AA7FF"}}>Centers</span></Typography>
                            <Typography color="#5C6169" fontSize={{ md:20}} mb={3}>Connect instantly with a 24*7 specialist or choose to video visit a particular doctor.</Typography>
                            <Link>
                            <Button style={{color:"#FFFFFF", backgroundColor:"#2AA7FF"}} variant="contained" size="large" disableElevation >Find Centers</Button></Link>
                        </Box>
                        <Box>
                            <img src={hero_image} style={{ height:"700px" }} alt="hero-image" width={{ xs:1, md:"50%" }}/>
                        </Box>
                    </Stack>
                </div>
                </div>
                </>

    );
}