import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
const HeroSection = () => {
  return (
    <Container>
      <Stack
        textAlign={"center"}
        direction={"row"}
        gap={"20px"}
        alignItems={"center"}
        sx={{ mt: "40px" }}
      >
        <Box width={"100%"}>
          <Typography
            variant="h3"
            component={"h2"}
            fontWeight={500}
            color="primary.main"
          >
            Find Your Perfect Flat-mate <Box component={"span"}>Today!</Box>
          </Typography>
          <Typography sx={{ my: "10px", fontSize: "18px" }}>
            Find the perfect roommate effortlessly and comfortably. Our platform
            connects you with compatible individuals, making your search for the
            ideal living companion easy and straightforward.
          </Typography>
          <Box
            sx={{
              mt: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button component={Link} href="/dashboard/user/post-flat-info">
              Share Your Flat
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
