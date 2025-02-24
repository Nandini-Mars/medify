import { Box, Typography, Stack  } from "@mui/material";
import blog_image from "../../../assets/Blogs/blog_image.png";
import rebecca from "../../../assets/Blogs/rebecca.png"


export default function BlogCard() {
    return(
        <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
            <Box 
                component="img"
                src={blog_image}
                width={1}
                />
            <Box p={2}>
                <Typography
                    color="#77829D"
                    fontWeight={500}
                    mb={1}
                    fontSize={{ xs:12, md:16 }}>
                        Medical | March 31, 2022
                </Typography>
                
                <Typography>
                     6 Tips To Protect Your Mental Health When You're Sick
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                        component="img"
                        src={rebecca}
                        height={22}
                        width={22}
                        />
                        <Typography color="#1B3C74" fontSize={{ xs:12, md:16 }}>
                            Rebecca Lee
                        </Typography>
                </Stack>

            </Box>

        </Box>
    );
}