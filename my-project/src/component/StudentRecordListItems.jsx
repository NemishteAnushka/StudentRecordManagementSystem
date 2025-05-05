import React from "react";
import { Button } from "react-bootstrap";

function StudentRecordListItems({ id, name, place, phone }) {
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{place}</td>
      <td>{phone}</td>
      <td className="col-3">
        <Button variant="info">View</Button>
        <Button variant="warning" className="ms-3">
          Edit
        </Button>
        <Button variant="danger" className="ms-3">
          Delete
        </Button>
      </td>
    </>
  );
}

export default StudentRecordListItems;
