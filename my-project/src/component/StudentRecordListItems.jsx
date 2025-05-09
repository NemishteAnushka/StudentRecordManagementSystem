import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StudentViewForm from "./StudentViewForm";
import CustomDeleteModal from "./CustomDeleteModal";
import StudentUpdateForm from "./StudentUpdateForm";

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

  //update custom modal
  const [updateModal, setUpdateModal] = useState(false);
  const openUpdateModal = () => setUpdateModal(true);
  const closeUpdateModal = () => setUpdateModal(false);

  const viewUpdateModal = () => {
    if (updateModal) {
      return (
        <StudentUpdateForm
          updateModal={updateModal}
          closeUpdateModal={closeUpdateModal}
          id={id}
        />
      );
    }
  };
  return (
    <>
      {viewUpdateModal()}
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
          <Button variant="warning" onClick={openUpdateModal} className="ms-3">
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
