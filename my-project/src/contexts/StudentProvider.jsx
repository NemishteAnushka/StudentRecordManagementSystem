import React, { createContext, useContext } from "react";
import { useGetStudentsDataQuery } from "../component/services/studentApi";

const MyProvider = createContext();
function StudentProvider({ children }) {
  const { data: StudentInfo } = useGetStudentsDataQuery();

  return (
    <MyProvider.Provider value={{ StudentInfo }}>
      {children}
    </MyProvider.Provider>
  );
}

export const studentContext = () => {
  return useContext(MyProvider);
};
export default StudentProvider;
