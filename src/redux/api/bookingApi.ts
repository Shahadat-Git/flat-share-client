import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBookingRequest: build.mutation({
      query: (data) => {
        return {
          url: "/booking-request",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.bookingRequests],
    }),

    getMyBookingRequests: build.query({
      query: () => ({
        url: "/booking-request/my-booking-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.bookingRequests],
    }),

    getAllBookingRequests: build.query({
      query: () => ({
        url: "/booking-request/all-booking-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.allBookingRequests],
    }),

    updateBookingStatus: build.mutation({
      query: (arg) => {
        return {
          url: `/booking-request/${arg?.id}`,
          method: "put",
          data: arg?.data,
        };
      },
      invalidatesTags: [tagTypes.bookingRequests, tagTypes.allBookingRequests],
    }),
  }),
});

export const {
  useCreateBookingRequestMutation,
  useGetMyBookingRequestsQuery,
  useGetAllBookingRequestsQuery,
  useUpdateBookingStatusMutation,
} = bookingApi;
