import { Box, Button, Container, Typography } from '@mui/material';
import IconCard from '../../IconCard/IconCard';
import Grid from '@mui/material/Grid2';
import drug_store from '../../../assets/Specialization/Drugstore.png';
import primary_care from '../../../assets/Specialization/Stethoscope.png';
import cardiology from '../../../assets/Specialization/Heart Rate.png';
import mri_resonance from '../../../assets/Specialization/Heart Rate Monitor.png';
import blood_test from '../../../assets/Specialization/Blood Sample.png';
import piscologist from '../../../assets/Specialization/Immune.png';
import laboratory from '../../../assets/Specialization/Drugstore_lab.png';
import x_ray from '../../../assets/Specialization/X-Ray.png';

export default function Specialization() {
    const data = [
        {icon: drug_store, title: "Dentistry"},
        {icon: primary_care, title: "Primary Care"},
        {icon: cardiology, title: "Cardiology"},
        {icon: mri_resonance, title: "MRI Resonance"},
        {icon: blood_test, title: "Blood Test"},
        {icon: piscologist, title: "Piscologist"},
        {icon: laboratory, title: "Laboratory"},
        {icon: x_ray, title: "X-Ray"},
    ]

    return (
        <Box 
        py={6}
        sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
            <Container sx={{ textAlign:"center" }}>
                <Typography variant="h2" mb={4}>
                    Find by specialisation
                </Typography>

                <Grid
                container
                spacing={{ xs:1, md:3 }} mb={5}
                justifyContent={"center"}>
                    {data.map((item) => (
                        <Grid
                        item 
                        xs={4}
                        md={3}
                        key={item.title}
                        >
                            <IconCard img={item.icon} title={item.title} bgColor={"#FFFFFF"} shadow={true} />
                        </Grid>
                    ))}
                </Grid>

                <Button
                variant="contained"
                size="large"
                disableElevation>
                    View All
                </Button>

            </Container>

        </Box>
    )

}