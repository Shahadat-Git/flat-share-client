"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import adviceJson from "@/assets/advice.json";
import Lottie from "lottie-react";
const Advice = () => {
  return (
    <Container sx={{ mt: "50px" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
        >
          Advice
        </Typography>
        <Typography>
          Finding the Perfect Flatmate: Patience and Compatibility are Key
        </Typography>
      </Box>
      <Stack
        direction={{ sm: "column", lg: "row" }}
        alignItems={"center"}
        gap={"20px"}
        mt={"40px"}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", sm: "100%" },
          }}
        >
          <Lottie
            style={{
              height: "100%",
            }}
            animationData={adviceJson}
            loop={true}
          />
        </Box>
        <Box
          sx={{
            width: { lg: "50%", sm: "100%" },
          }}
        >
          <Stack>
            <Typography fontSize={30} fontWeight={600} textAlign={"center"}>
              &quot;Choose the Right Flatmate&quot;
            </Typography>
            <Typography mt={2} fontSize={18}>
              Flat-sharing is all about creating a harmonious living
              environment, and the key to this is choosing the right flatmate.
              Instead of rushing into a decision or settling for the first
              person who applies, take your time to find someone who aligns with
              your lifestyle and values. Be patient, conduct thorough
              interviews, and pay attention to compatibility in daily habits,
              cleanliness, and social preferences. A carefully chosen flatmate
              can lead to a comfortable and enjoyable living experience,
              creating a home where everyone feels at ease and happy. Patience
              and discernment in your selection process can result in a positive
              and harmonious shared living situation.
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Advice;
