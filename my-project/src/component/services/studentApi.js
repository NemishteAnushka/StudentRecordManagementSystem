import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/" }),
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "students",
    }),
  }),
});

export const { useGetStudentsDataQuery } = studentApi;
