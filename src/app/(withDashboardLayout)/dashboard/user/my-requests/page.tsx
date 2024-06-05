"use client";
import MyBookingRequestTable from "@/components/dashboard/User/MyRequest/MyBookingTable";
import { useGetMyBookingRequestsQuery } from "@/redux/api/bookingApi";
import { Box, Typography } from "@mui/material";
import React from "react";

const MyRequestsPage = () => {
  const { data, isLoading } = useGetMyBookingRequestsQuery({});
  return (
    <Box>
      {!isLoading ? (
       data?.data?.length > 0 ? (
        <MyBookingRequestTable bookingRequests={data?.data} />
        ) : (
          <Typography variant="h5" component={"p"} textAlign={"center"}>
            There is no booking request from you!!
          </Typography>
        )
      ) : (
        <Typography>Loading....</Typography>
      )}
    </Box>
  );
};

export default MyRequestsPage;
