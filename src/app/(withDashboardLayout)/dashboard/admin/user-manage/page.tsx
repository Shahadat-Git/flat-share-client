"use client";
import UserTable from "@/components/dashboard/admin/UserManage/UserTable";
import { useGetAllUserQuery } from "@/redux/api/userApi";

import { Typography } from "@mui/material";

const UserManagementPage = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  return (
    <div>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : data?.data?.length > 0 ? (
        <UserTable users={data?.data} />
      ) : (
        <Typography variant="h4" component={"h4"} textAlign={"center"}>
          There is no user{" "}
        </Typography>
      )}
    </div>
  );
};

export default UserManagementPage;