"use client";
import FlatTable from "@/components/dashboard/admin/FlatManage/FlatTable";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { Typography } from "@mui/material";

const FlatManagePage = () => {
  const { data, isLoading } = useGetAllFlatsQuery({});

  return (
    <div>
      {!isLoading ? (
        <FlatTable flats={data} />
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default FlatManagePage;
