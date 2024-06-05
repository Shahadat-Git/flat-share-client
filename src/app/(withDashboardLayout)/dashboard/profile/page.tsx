"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import EditProfileModal from "@/components/dashboard/ProfileMenu/EditProfileModal";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetMyProfileQuery({});
  const profileInfo = data?.data;
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#FFC300",
          color: "white",
          minWidth: "800px",
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
              Edit Profile
            </Button>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography color={"white"} fontSize={"20px"} fontWeight={600}>
              Username: {profileInfo?.username}
            </Typography>
            <Typography color={"white"}>Email: {profileInfo?.email}</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Typography fontWeight={600} color={"white"}>
              Status:
            </Typography>
            <Typography color={"white"}>{profileInfo?.status}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Typography fontWeight={600} color={"white"}>
              Role:
            </Typography>
            <Typography color={"white"}>{profileInfo?.role}</Typography>
          </Box>

          <Box
            sx={{
              textAlign: "center",
            }}
          ></Box>
        </Box>
      </Box>
      <EditProfileModal
        open={open}
        setOpen={setOpen}
        profileData={profileInfo}
      />
    </Box>
  );
};

export default ProfilePage;
