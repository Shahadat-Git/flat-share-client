"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import client1 from "@/assets/images/client1.jpg";
import client2 from "@/assets/images/client2.jpg";

const reviewItems = [
  {
    name: "Emily Davis",
    review:
      "Fantastic service! The process was smooth and the team was incredibly helpful every step of the way.",
    image: client1,
  },
  {
    name: "Michael Brown",
    review:
      "A truly seamless experience. I found my ideal home with ease thanks to their excellent listings and support.",
    image: client2,
  },
  
];

export default function ReviewClient() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const currentItem = reviewItems[activeStep];

  return (
    <Container sx={{ mt: "50px" }}>
      <Box sx={{ textAlign: "center" }} mb={"30px"}>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
        >
          Reviews
        </Typography>
        <Typography>
          Discover why our clients rave about us. Genuine experiences, genuine
          happiness.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack alignContent={"center"} alignItems={"center"}>
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "150px",
                  height: "150px",
                }}
              >
                <Image
                  src={currentItem?.image}
                  alt="image"
                  width={150}
                  height={150}
                  style={{ borderRadius: "100%" }}
                />
              </Box>
            </Box>
            <Typography
              textAlign={"center"}
              variant="h5"
              component={"h5"}
              my={"5px"}
            >
              {currentItem.name}
            </Typography>
            <Typography textAlign={"center"} maxWidth={500}>
              {currentItem.review}
            </Typography>
          </div>
          <MobileStepper
            variant="dots"
            steps={reviewItems.length}
            position="static"
            activeStep={activeStep}
            sx={{
              maxWidth: 400,
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              mt: "40px",
            }}
            nextButton={
              <Button
                variant="outlined"
                size="small"
                onClick={handleNext}
                disabled={activeStep === reviewItems.length - 1}
              >
                {/* Next */}
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                variant="outlined"
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                {/* Back */}
              </Button>
            }
          />
        </Stack>
      </Box>
    </Container>
  );
}
