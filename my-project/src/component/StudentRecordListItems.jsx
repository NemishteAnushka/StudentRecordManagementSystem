import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StudentViewForm from "./StudentViewForm";

function StudentRecordListItems({ id, name, place, phone }) {
  const [showViewModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const viewModal = () => {
    if (showViewModal) {
      return (
        <StudentViewForm
          handleClose={handleClose}
          showViewModal={showViewModal}
          id={id}
        />
      );
    }
  };
  return (
    <>
      {viewModal()}
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{place}</td>
        <td>{phone}</td>
        <td className="col-3">
          <Button variant="info" onClick={handleOpen}>
            View
          </Button>
          <Button variant="warning" className="ms-3">
            Edit
          </Button>
          <Button variant="danger" className="ms-3">
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default StudentRecordListItems;
