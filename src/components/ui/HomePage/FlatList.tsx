import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FlatCard from "./FlatCard";
import { TFlat } from "@/types/flat";
import Link from "next/link";

const FlatList = async () => {
  const res = await fetch(
    "https://next-flat-share-server.vercel.app/api/flat",
    {
      cache: "no-cache",
    }
  );
  const { data: flats } = await res.json();
  //   console.log(flats);
  return (
    <Container sx={{ mt: "100px" }}>
      <Box>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
          textAlign={"center"}
        >
          Available Flats
        </Typography>
        <Typography textAlign={"center"}>
          Explore our exclusive flat listings and find your dream home
          instantly.
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "space-between", mt: "20px" }}
        >
          {flats?.slice(0, 3)?.map((flat: TFlat, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FlatCard key={index} flat={flat} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
          <Button component={Link} href="/all-flats" variant="contained">
            See All
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FlatList;
