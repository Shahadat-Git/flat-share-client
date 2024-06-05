"use client";
import ReUseForm from "@/components/forms/ReUseForm";
import ReUseInput from "@/components/forms/ReUseInput";
import { authKey } from "@/constants/auth";
import { registerValidationSchema } from "@/schemas/register";
import { loginUser } from "@/services/actions/loginUser";
import { registerUser } from "@/services/actions/registerUser";
import setAccessTokenToCookies from "@/services/actions/setAccessTokenToCookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    if (values?.password === values?.confirmPassword) {
      try {
        const userInputData = {
          username: values?.username,
          email: values?.email,
          password: values?.password,
        };
        const res = await registerUser(userInputData);

        if (res?.success) {
          const result = await loginUser({
            email: values.email,
            password: values.password,
          });
          if (result?.success) {
            toast.success("User login successfully");
            localStorage.setItem(authKey, result?.data?.token);
            setAccessTokenToCookies(result?.data?.token, {
              redirect: "/",
            });
          }
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      setError("Password  do not match");
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
                Create Account
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <ReUseForm
              onSubmit={handleRegister}
              resolver={zodResolver(registerValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <ReUseInput
                    label="User Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReUseInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
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
                <Grid item xs={12}>
                  <ReUseInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
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
                Register
              </Button>

              <Link style={{ color: "#FF5733" }} href={"/login"}>
                Already have an account?
              </Link>
            </ReUseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
