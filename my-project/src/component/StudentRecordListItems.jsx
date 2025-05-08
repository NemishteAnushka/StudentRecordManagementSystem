import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StudentViewForm from "./StudentViewForm";
import CustomDeleteModal from "./CustomDeleteModal";

function StudentRecordListItems({ id, name, place, phone }) {
  //view Modal
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
  //delete Custom Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleShowDelete = () => setShowDeleteModal(true);
  const handleCloseDelete = () => setShowDeleteModal(false);

  const deleteModal = () => {
    if (showDeleteModal) {
      return (
        <CustomDeleteModal
          handleClose={handleCloseDelete}
          showDeleteModal={showDeleteModal}
          id={id}
        />
      );
    }
  };

  return (
    <>
      {viewModal()}
      {deleteModal()}
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
          <Button variant="danger" className="ms-3" onClick={handleShowDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default StudentRecordListItems;
