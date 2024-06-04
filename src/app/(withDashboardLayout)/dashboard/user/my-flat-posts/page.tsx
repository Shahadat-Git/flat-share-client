"use client";
import { useGetMyFlatsQuery } from "@/redux/api/flatApi";
import React from "react";
import { Typography } from "@mui/material";
import MyFlatPostTable from "@/components/dashboard/User/MyFlatPosts/MyFlatPostTable";

const MyFlatPosts = () => {
  const { data, isLoading } = useGetMyFlatsQuery({});
  console.log(data);
  return (
    <div>
      {" "}
      {!isLoading ? (
        data?.length > 0 ? (
          <MyFlatPostTable flats={data} />
        ) : (
          <Typography variant="h5" component={"p"} textAlign={"center"}>
            You haven&apos;t posted a flat share yet!
          </Typography>
        )
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default MyFlatPosts;
