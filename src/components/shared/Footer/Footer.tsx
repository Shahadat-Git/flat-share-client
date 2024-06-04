import { Box, Container, Stack, Typography } from "@mui/material";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box bgcolor={"#FFC300"} py={5} mt={"100px"}>
      <Container>
        <Stack
          direction={{ md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          justifyItems={"center"}
        >
          <Box>
            <Image src={logo} height={100} width={100} alt="logo" />
            <Typography color={"white"} variant="h5" component={"h5"}>
              Flat Share
            </Typography>
          </Box>
          <Box color={"white"}>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"5px"}
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              Useful Links
            </Typography>
            <Box
              sx={{
                display: {
                  lg: "flex",
                },
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Flat</Link>
              <Link href={"/"}>Privacy </Link>
              <Link href={"/"}>Terms & Condition</Link>
            </Box>
          </Box>
          <Box>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"15px"}
            >
              Contact Information
            </Typography>
            <Box color={"white"}>
              <Typography color={"white"}>
                Email: support@next-flat.com
              </Typography>
              <Typography color={"white"} sx={{ my: "10px" }}>
                Phone: +1697868587
              </Typography>
              <Typography color={"white"}>Location: NewYork, USA</Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"15px"}
            >
              Follow Us
            </Typography>
            <Stack direction={"row"} gap={2}>
              <FacebookIcon />
              <XIcon />
              <LinkedInIcon />
            </Stack>
          </Box>
        </Stack>
        <Box
          sx={{
            border: "1px solid white",
            mt: "20px",
          }}
        ></Box>
        <Typography
          component={"p"}
          color={"white"}
          sx={{ mt: "20px" }}
          textAlign={"center"}
        >
          &copy;Copyrights Next Flat 2024. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
