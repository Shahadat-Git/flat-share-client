import { TBookingRequest } from "@/types/booking";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect, useState } from "react";
import { useUpdateBookingStatusMutation } from "@/redux/api/bookingApi";
import { toast } from "sonner";
const BookingsTable = ({
  bookingRequests,
}: {
  bookingRequests: TBookingRequest[];
}) => {
  const [updatedBookingRequests, setUpdatedBookingRequests] = useState<any>([]);
  const [updateStatus] = useUpdateBookingStatusMutation();

  useEffect(() => {
    const updatedData = bookingRequests?.map(
      (bookingRequest: TBookingRequest, index: number) => {
        return {
          id: index + 1,
          name: bookingRequest?.name,
          email: bookingRequest?.email,
          flatId: bookingRequest?.flatId,
          bookingId: bookingRequest?.id,
          rentAmount: bookingRequest?.flat?.rentAmount,
          status: bookingRequest?.status,
        };
      }
    );
    setUpdatedBookingRequests(updatedData);
  }, [bookingRequests]);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "flatId", headerName: "Flat ID", flex: 1 },
    { field: "bookingId", headerName: "Booking ID", flex: 1 },
    { field: "rentAmount", headerName: "Rent Amount", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              disabled={row?.status === "PENDING"}
              onClick={() => handleUpdateFlatStatus("PENDING", row?.bookingId)}
              aria-label="delete"
            >
              <RunningWithErrorsIcon
                sx={{
                  color: `${row?.status === "PENDING" ? "gray" : "orange"}`,
                }}
              />
            </IconButton>

            <IconButton
              disabled={row?.status === "APPROVED"}
              onClick={() => handleUpdateFlatStatus("APPROVED", row?.bookingId)}
              aria-label="delete"
            >
              <CheckCircleIcon
                sx={{
                  color: `${row?.status === "APPROVED" ? "gray" : "green"}`,
                }}
              />
            </IconButton>

            <IconButton
              disabled={row?.status === "REJECTED"}
              onClick={() => handleUpdateFlatStatus("REJECTED", row?.bookingId)}
              aria-label="delete"
            >
              <CancelIcon
                sx={{
                  color: `${row?.status === "REJECTED" ? "gray" : "red"}`,
                }}
              />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleUpdateFlatStatus = async (value: string, id: string) => {
    const bookingInfo = {
      id: id,
      data: { status: value },
    };
    try {
      const res = await updateStatus(bookingInfo).unwrap();
      if (res?.success) {
        toast.success("Booking request updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={updatedBookingRequests}
        columns={columns}
        hideFooterPagination
      />
    </div>
  );
};

export default BookingsTable;
