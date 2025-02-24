import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import mobile from '../../../assets/DownloadApp/mobile.jpg';
import playstore from '../../../assets/DownloadApp/google_play.png.png';
import apple from '../../../assets/DownloadApp/apple_store.png.png';
import arrow from '../../../assets/DownloadApp/Vector.png';
import SmsForm from "./SmsForm";


export default function DownloadApp() {
    return(
<Box
    sx={{ background:"linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt:5 }}
    >
    <Container>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={5.5}>
                <Box
                    component="img"
                    src={mobile}
                    width={1}
                    height="auto" />
            </Grid>

            <Grid item xs={12} md={6.5}>
                <Box
                position="relative"
                pl={{ xs: "36px", md:"50px" }}
                mb={{ xs:4, md:0 }}
                >
                    <Typography variant="h2" mb={2}>
                        Download the
                        <br/>
                        <Box component="span" color="primary.main">
                            Medify
                        </Box>
                        App
                    </Typography>

                    <Box
                    component="img"
                    src={arrow}
                    width={{ xs:24, md: 40 }}
                    position="absolute"
                    left={0}
                    top={50}
                    />
                    <SmsForm />

                    <Stack
                        direction={{ xs:"column", md:"row" }}
                        spacing={{ xs:1, md:2 }}>
                            <Button
                            sx= {{
                                bgcolor:"#333",
                                color:"#fff",
                                py:1.5,
                                borderRadius:1.5,
                            }}
                            size={"large"}
                            startIcon={<img src={playstore} height={24} alt="No Img" />}
                            variant="contained"
                            disableElevation
                            >
                            </Button>

                            <Button
                                sx={{
                                    bgcolor:"#333",
                                    color:"#fff",
                                    py:1.5,
                                    borderRadius:1.5,
                                }}
                                size={"large"}
                                startIcon={<img src={apple} height={24} alt="No Img"/>}
                                variant="contained"
                                disableElevation
                                >
                            </Button>

                    </Stack>
                </Box>
            </Grid>

        </Grid>
    </Container>
</Box>
    );
}