import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4001/" }),
  tagTypes: ["student-list", "student-by-id", "update-student"],
  endpoints: (builder) => ({
    getStudentsData: builder.query({
      query: () => "students",
      providesTags: ["student-list", "update-student"],
    }),
    getStudentDataById: builder.query({
      query: (id) => `students/${id}`,
      providesTags: ["student-by-id", "update-student"],
    }),
    addStudentData: builder.mutation({
      query: (newStudent) => ({
        url: "students",
        method: "POST",
        body: newStudent,
      }),
      invalidatesTags: ["student-list"],
    }),
    updateStudentData: builder.mutation({
      query: (newStudent) => ({
        url: `students/${newStudent?.id}`,
        method: "PUT",
        body: newStudent,
      }),
      invalidatesTags: ["update-student"],
    }),
    deleteStudentData: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["student-list"],
    }),
  }),
});

export const {
  useGetStudentsDataQuery,
  useAddStudentDataMutation,
  useUpdateStudentDataMutation,
  useGetStudentDataByIdQuery,
  useDeleteStudentDataMutation,
} = studentApi;
