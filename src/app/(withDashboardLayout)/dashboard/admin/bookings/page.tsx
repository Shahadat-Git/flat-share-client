"use client";
import BookingsTable from "@/components/dashboard/admin/Bookings/Bookings";
import { useGetAllBookingRequestsQuery } from "@/redux/api/bookingApi";
import { Box, Typography } from "@mui/material";
import React from "react";

const BookingPage = () => {
  const { data, isLoading } = useGetAllBookingRequestsQuery({});
  return (
    <Box>
      {!isLoading ? (
        data?.data?.length > 0 ? (
          <BookingsTable bookingRequests={data?.data} />
        ) : (
          <Typography variant="h5" component={"p"} textAlign={"center"}>
            There is no booking request
          </Typography>
        )
      ) : (
        <Typography>Loading....</Typography>
      )}
    </Box>
  );
};

export default BookingPage;
