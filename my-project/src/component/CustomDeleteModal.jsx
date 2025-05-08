import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDeleteStudentDataMutation } from "./services/studentApi";

function CustomDeleteModal({ handleClose, showDeleteModal, id }) {
  const [deleteEntry] = useDeleteStudentDataMutation();

  const handleDelete = async () => {
    try {
      let payload = await deleteEntry(id);
      if (payload) {
        console.log(payload);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={showDeleteModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete the Enter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Do you want to delete the entry ?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="primary" onClick={handleClose}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CustomDeleteModal;
