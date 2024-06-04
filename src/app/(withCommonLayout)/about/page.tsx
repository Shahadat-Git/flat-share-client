import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Box my={1}>
        <Typography variant="h4" component="h1" textAlign={"center"} gutterBottom>
          About Us
        </Typography>
      </Box>
      <Box my={4}>
        <Paper
          sx={{
            padding: 4,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="body1" component="p" paragraph>
          Our goal is to make co-living effortless and pleasant. Whether you&apos;re looking for a new home or a flatmate, we&apos;re here to support you. Our platform connects you with compatible people, fostering a harmonious and enjoyable living environment.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
