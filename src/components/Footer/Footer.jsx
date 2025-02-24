import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FooterLink from './FooterLink';
import logo from '../../assets/MedifyLogo.png';
import fb from '../../assets/Footer/fb.png';
import twitter from '../../assets/Footer/twitter.png';
import yt from '../../assets/Footer/yt.png';
import pinterest from '../../assets/Footer/pinterest.png';

export default function Footer() {
    return (
        <Box bgcolor="#1B3C74" pb={3} pt={6}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} md={4.5}>
                        <Stack
                            alignItems="flex-start"
                            justifyContent="space-between"
                            height={1}
                        >
                            <Box component="img" src={logo} height={36} alt="Medify" mb={2} />
                            <Stack direction="row" spacing={1.5}>
                                <Box component="img" src={fb} height={36} />
                                <Box component="img" src={twitter} height={36} />
                                <Box component="img" src={yt} height={36} />
                                <Box component="img" src={pinterest} height={36} />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2.5}>
                    <Stack spacing={2}>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Our Pricing</FooterLink>
                            <FooterLink>Our Gallery</FooterLink>
                            <FooterLink>Appointment</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <FooterLink>Orthology</FooterLink>
                            <FooterLink>Neurology</FooterLink>
                            <FooterLink>Dental Care</FooterLink>
                            <FooterLink>Opthalmology</FooterLink>
                            <FooterLink>Cardiology</FooterLink>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2.5}>
                        <Stack spacing={2}>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Our Pricing</FooterLink>
                            <FooterLink>Our Gallery</FooterLink>
                            <FooterLink>Appointment</FooterLink>
                            <FooterLink>Privacy Policy</FooterLink>
                        </Stack>
                    </Grid>
                </Grid>
                <Typography
                    fontWeight={300}
                    color="#fff"
                    fontSize={14}
                    pt={3}
                    mt={5}
                    borderTop="1px solid rgba(255,255,255,0.1)" // Corrected borderTop
                >
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </Typography>
            </Container>
        </Box>
    );
}
