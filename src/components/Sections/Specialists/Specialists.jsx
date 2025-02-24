import { Box, Typography } from "@mui/material";
import SpecialistCard from "./SpecialistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination  } from "swiper/modules";
import img1 from "../../../assets/Specialist/khan.png";
import img2 from "../../../assets/Specialist/sachdeva.png"
import img3 from "../../../assets/Specialist/sharma.png";



export default function Specialists(){
    const specialist_data = [
        { img: img1, title:"Dr, Lesley Hull", designation:"Medicine" },
        { img: img2, title:"Dr, Ahmad Khan", designation:"Neurologist" },
        { img: img3, title:"Dr, Heena Sachdeva", designation:"Orthopadics" },
        { img: img1, title:"Dr, Ankur Sharma", designation:"Medicine" },
        { img: img2, title:"Dr, Ahmad Stevens", designation:"Neurologist" },
        { img: img3, title:"Dr, Lesley Hull", designation:"Medicine" },
        { img: img1, title:"Dr, Ahmad Khan", designation:"Neurologist" },
        { img: img2, title:"Dr, Heena Sachdeva", designation:"Orthopadics" },
        { img: img3, title:"Dr, Ankur Sharma", designation:"Medicine" },
        { img: img1, title:"Dr, Ahmad Stevens", designation:"Neurologist" }
    ]

    return (
      <Box
      py={4}
      id="find-doctors"
      >
        <Typography variant="h2" textAlign="center" mb={3} px={2}>
            Our Medical Specialist
        </Typography>
        <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
                clickable:true
            }}
            breakpoints={
                {
                    767:{
                        slidesPerView:4
                    }
                }
            }>
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation} />
                    </SwiperSlide>
                ))}

        </Swiper>
      </Box>  
    );
}