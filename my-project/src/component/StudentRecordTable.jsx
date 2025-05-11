import React from "react";
import { Table } from "react-bootstrap";
import StudentRecordListItems from "./StudentRecordListItems";
import CreateButton from "./CreateButton";
import { studentContext } from "../contexts/StudentProvider";

function StudentRecordTable() {
  const { StudentInfo } = studentContext();
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
              <StudentRecordListItems {...items} key={items?.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StudentRecordTable;
