import { TResponseSuccess } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (data) => ({
        url: "/flat",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.flats],
    }),

    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flat",
        method: "GET",
        params: arg,
      }),

      providesTags: [tagTypes.flats],
    }),

    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flats],
    }),

    getMyFlats: build.query({
      query: () => ({
        url: "/flat/my-flats",
        method: "GET",
      }),
      providesTags: [tagTypes.flats],
    }),

    getSingleFlat: build.query({
      query: ({ flatId }) => {
        // console.log(flatId);
        return {
          url: `/flat/${flatId}`,
          method: "GET",
        };
      },
    }),

    updateFlat: build.mutation({
      query: (arg) => ({
        url: `/flat/${arg?.id}`,
        method: "PUT",
        data: arg?.data,
      }),
      invalidatesTags: [tagTypes.flats],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatsQuery,
  useDeleteFlatMutation,
  useGetMyFlatsQuery,
  useGetSingleFlatQuery,
  useUpdateFlatMutation,
} = flatApi;
