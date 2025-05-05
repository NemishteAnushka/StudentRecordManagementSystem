import React from "react";
import { Button, Table } from "react-bootstrap";
import { studentApi, useGetStudentsDataQuery } from "./services/studentApi";
import StudentRecordListItems from "./StudentRecordListItems";
import CreateButton from "./CreateButton";

function StudentRecordTable() {
  const { data: StudentInfo } = useGetStudentsDataQuery();
  console.log(StudentInfo);
  return (
    <>
      <div className="d-flex justify-content-center">
        <h4>Students Record Management</h4>
      </div>
      <div>
        <CreateButton />
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-uppercase">Sr No</th>
              <th className="text-uppercase">Name</th>
              <th className="text-uppercase">Place</th>
              <th className="text-uppercase">Phone</th>
              <th className="text-uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {StudentInfo?.length <= 0 && (
              <>
                <tr>
                  <th colSpan={6} className="text-center">
                    No Records To Show
                  </th>
                </tr>
              </>
            )}
            {StudentInfo?.map((items) => (
              <tr key={items?.id}>
                <StudentRecordListItems {...items} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentRecordTable;
