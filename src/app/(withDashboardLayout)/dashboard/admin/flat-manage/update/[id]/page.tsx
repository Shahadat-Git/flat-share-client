"use client";
import ReUseForm from "@/components/forms/ReUseForm";
import ReUseInput from "@/components/forms/ReUseInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { zodResolver } from "@hookform/resolvers/zod";
import { flatValidationSchema } from "@/schemas/flat";
import { toast } from "sonner";
import {
  useGetSingleFlatQuery,
  useUpdateFlatMutation,
} from "@/redux/api/flatApi";
import { useRouter } from "next/navigation";
import { editFlatValidationSchema } from "@/schemas/editFlat";
import { convertValuesToString } from "@/utils/convertValueToSring";

type TParams = {
  id: string;
};

const UpdateFlatPage = ({ params }: { params: TParams }) => {
  const [error, setError] = useState("");
  const router = useRouter();
  const flatId = params?.id;
  const { data, isLoading }: any = useGetSingleFlatQuery({ flatId: flatId });
  const [updateFlat] = useUpdateFlatMutation();

  const handlePostFlatInfo = async (values: FieldValues) => {
    console.log(values);
    setError("");
    values.squareFeet = Number(values.squareFeet);
    values.totalBedrooms = Number(values.totalBedrooms);
    values.totalRooms = Number(values.totalRooms);
    values.rentAmount = Number(values.rentAmount);
    values.advancedAmount = Number(values.advancedAmount);
    const flatInfo = {
      id: flatId,
      data: values,
    };
    try {
      const res = await updateFlat(flatInfo).unwrap();
      if (res?.success) {
        toast.success("Flat updated successfully");
        router.push("/dashboard/admin/flat-manage");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      {!isLoading && (
        <Stack
          sx={{
            // height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
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
                  Update flat details
                </Typography>
              </Box>
            </Stack>
            <Box textAlign={"center"}>
              <ReUseForm
                defaultValues={convertValuesToString(data?.data)}
                onSubmit={handlePostFlatInfo}
                resolver={zodResolver(editFlatValidationSchema)}
              >
                <Grid container spacing={3} my={1}>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="SquareFeet"
                      type="number"
                      size="small"
                      fullWidth={true}
                      name="squareFeet"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="Location"
                      type="text"
                      name="location"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="Total Bedrooms"
                      type="number"
                      name="totalBedrooms"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="Total Rooms"
                      type="number"
                      name="totalRooms"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="Rent Amount"
                      type="number"
                      name="rentAmount"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ReUseInput
                      label="Advanced Amount"
                      type="number"
                      name="advancedAmount"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReUseInput
                      label="Amenities"
                      type="text"
                      name="amenities"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReUseInput
                      label="Detailed Description"
                      type="text"
                      name="detailedDescription"
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
                  Submit
                </Button>
              </ReUseForm>
            </Box>
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default UpdateFlatPage;
