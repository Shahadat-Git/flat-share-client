import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/actions/authServices";
import { generateSideBarItems } from "@/utils/generateSidebarItems";
import { TUserRole } from "@/types";
import SideBarItems from "./SideBarItems";
const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        component={Link}
        href={"/"}
        sx={{
          py: 1,
          mt: 1,
        }}
      >
        <Image src={logo} alt="logo" width={80} height={40} />
        <Typography variant="h5" component={"h4"}>
          Next Flat
        </Typography>
      </Stack>
      <List>
        {generateSideBarItems(userRole as TUserRole).map((item, index) => (
          <SideBarItems key={index} item={item}></SideBarItems>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
