"use client";
import ReUseForm from "@/components/forms/ReUseForm";
import ReUseInput from "@/components/forms/ReUseInput";
import { authKey } from "@/constants/auth";
import { loginValidationSchema } from "@/schemas/login";
import { loginUser } from "@/services/actions/loginUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/actions/authServices";
import setAccessTokenToCookies from "@/services/actions/setAccessTokenToCookie";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res?.success) {
        storeUserInfo(res?.data?.token);
        setAccessTokenToCookies(res?.data?.token, {
          redirect: "/",
        });
        toast.success("User login successfully");

        // router.push("/");
      } else {
        setError(res?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <ReUseForm
              onSubmit={handleLogin}
              resolver={zodResolver(loginValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <ReUseInput
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReUseInput
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              {error && (
                <Box>
                  <Typography color={"red"}>{error}</Typography>
                </Box>
              )}
              <Button
                fullWidth={true}
                sx={{
                  margin: "20px 0px",
                }}
                type="submit"
              >
                Login
              </Button>
              <Typography component="h1" fontWeight={300}>
                <Link style={{ color: "#FF5733" }} href={"/register"}>
                  Don&apos;t have an account?
                </Link>
              </Typography>
            </ReUseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
