"use client";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { getUserInfo, isLoggedIn } from "@/services/actions/authServices";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userInfo = getUserInfo();
  const handleLogout = () => {
    logoutUser(router);
  };
  return (
    <Container>
      <Box position="static">
        <Toolbar disableGutters>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Box
              component={Link}
              href={"/"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <Image src={logo} alt="logo" height={100} width={100} />
              <Typography fontSize={"30px"} fontWeight={700}>
                Next Flat
              </Typography>
            </Box>
          </Typography>
          {isPhone ? (
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem component={Link} href={"/"}>
                  Home
                </MenuItem>
                <MenuItem component={Link} href={"/about"}>
                  About Us
                </MenuItem>
                {isLoggedIn() && (
                  <MenuItem component={Link} href={"/dashboard/profile"}>
                    My Profile
                  </MenuItem>
                )}
                <Box>
                  {userInfo?.email ? (
                    <Button color="error" onClick={handleLogout}>
                      Logout
                    </Button>
                  ) : (
                    <Button component={Link} href="/login">
                      Login
                    </Button>
                  )}
                </Box>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Link href={"/"} color="inherit">
                Home
              </Link>
              <Link href={"/about"} color="inherit">
                About
              </Link>
              {isLoggedIn() && (
                <Link href={"/dashboard/profile"} color="inherit">
                  My Profile
                </Link>
              )}
              <Box>
                {userInfo?.email ? (
                  <Button onClick={handleLogout}>Logout</Button>
                ) : (
                  <Button component={Link} href="/login">
                    Login
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Toolbar>
      </Box>
    </Container>
  );
};

export default Navbar;
