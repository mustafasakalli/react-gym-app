import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
import { display } from '@mui/system'

const HeroBanner = () => {
    return (
        <Box
            sx={{ mt: { lg: '212px', xs: "70px" }, ml: { sm: "50px" } }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#FF2625"
                fontSize="26px"
                fontWeight="600"
            >
                Fitness Club
            </Typography>
            <Typography fontWeight="700" sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="45px" mb={2}>
                Checkout the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{ padding: '12px' }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="FF2625"
                sx={{
                    opacity: 0.15,
                    display: {
                        lg: 'block', xs: 'none'
                    }
                }}
                fontSize="200px"
                mt="44px"
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

        </Box >
    )
}

export default HeroBanner