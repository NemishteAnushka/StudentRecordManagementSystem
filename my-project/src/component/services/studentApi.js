import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/" }),
  tagTypes: ["student-list"],
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "students",
      providesTags: ["student-list"],
    }),
    addStudentData: builder.mutation({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["student-list"],
    }),
  }),
});

export const { useGetStudentsDataQuery, useAddStudentDataMutation } =
  studentApi;
