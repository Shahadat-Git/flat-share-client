"use client";

import ReUseForm from "@/components/forms/ReUseForm";
import ReUseInput from "@/components/forms/ReUseInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

const SearchBar = () => {
  const handleSearchFlat = async (values: FieldValues) => {
    values.totalBedrooms = Number(values.totalBedrooms);
    values.minPrice = Number(values.minPrice);
    values.maxPrice = Number(values.maxPrice);
    console.log(values);
  };
  return (
    <Container
      sx={{
        mt: "80px",
      }}
    >
      <Box>
        <Typography
          sx={{ mb: "20px", textAlign: "center" }}
          variant="h5"
          component={"h5"}
        >
          Search Flat
        </Typography>
        <ReUseForm onSubmit={handleSearchFlat}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <ReUseInput
                label="Type Location"
                type="text"
                size="small"
                fullWidth={true}
                name="searchTerm"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ReUseInput
                label="Total Bedrooms"
                type="text"
                size="small"
                fullWidth={true}
                name="totalBedrooms"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ReUseInput
                label="Min Price"
                type="number"
                size="small"
                fullWidth={true}
                name="minPrice"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <ReUseInput
                label="Max Price"
                type="number"
                size="small"
                fullWidth={true}
                name="maxPrice"
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: "320px", mt: { xs: "20px" } }}
              type="submit"
              size="small"
            >
              Search
            </Button>
          </Box>
        </ReUseForm>
      </Box>
    </Container>
  );
};

export default SearchBar;
