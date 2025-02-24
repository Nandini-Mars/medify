import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useMemo } from "react";
import doctorIcon from '../../assets/HeroServices/Doctor.png';
import pharmacyIcon from '../../assets/HeroServices/Drugstore.png';
import hospitalIcon from '../../assets/HeroServices/Hospital.png';
import capsuleIcon from '../../assets/HeroServices/Capsule.png';
import ambulanceIcon from '../../assets/HeroServices/Ambulance.png';
import IconCard from '../IconCard/IconCard';


export default function HeroServices() {
    const Services = useMemo(
        () => [
            { img: doctorIcon, title:"Doctors" },
            { img: pharmacyIcon, title:"Labs" },
            { img: hospitalIcon, title:"Hospitals", active: true },
            { img: capsuleIcon, title:"Medical Store" },
            { img: ambulanceIcon, title:"Ambulance" },
        ], []
    );

    const titleList = Services.map(service => service.title);

    return (
        <Box>
            <Typography
            component="h4"
            fontSize={20}
            color="#102851"
            fontWeight={500}
            textAlign="center"
            mb={2}
            >
                You may be looking for
            </Typography>

            <Grid
            container
            columnSpacing={{ xs:1, md:2 }}
            justifyContent={"center"}
            >
                {Services.map((service) => (
                    <Grid item key={service.title} xs={4} md={2.4}>
                        <IconCard
                        img={service.img}
                        title={service.title}
                        active={service.active || false}
                        bgColor="#FAFBFE"
                        />
                    </Grid>
                ))}

            </Grid>

        </Box>
    );
}