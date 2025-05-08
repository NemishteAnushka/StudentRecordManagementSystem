import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/" }),
  tagTypes: ["student-list", "student-by-id"],
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "students",
      providesTags: ["student-list"],
    }),
    getStudentDataById: builder.query({
      query: (id) => `students/${id}`,
      providesTags: ["student-by-id"],
    }),
    addStudentData: builder.mutation({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["student-list"],
    }),
    deleteStudentData: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
        // body: newStudent,
      }),
      invalidatesTags: ["student-list"],
    }),
  }),
});

export const {
  useGetStudentsDataQuery,
  useAddStudentDataMutation,
  useGetStudentDataByIdQuery,
  useDeleteStudentDataMutation,
} = studentApi;
