import { Box, Container } from '@mui/material';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Import the Pagination CSS for styling dots
import offer1 from '../../../assets/Offers/Offers1.png';
import offer2 from '../../../assets/Offers/Offers2.png';

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth="xl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true, // Makes dots clickable
                        type: 'bullets', // Adds the dots (bullets) pagination type
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3, // Shows 3 slides on larger screens
                        },
                    }}
                >
                    <SwiperSlide>
                        <Box component="img" src={offer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="img" src={offer2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="img" src={offer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="img" src={offer2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="img" src={offer1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="img" src={offer2} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    );
}
