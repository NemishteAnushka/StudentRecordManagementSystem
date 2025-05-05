import React, { useState } from "react";
import { Button } from "react-bootstrap";
import StudentCreateForm from "./StudentCreateForm";

function CreateButton() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const studentModal = () => {
    if (showModal) {
      return (
        <StudentCreateForm showModal={showModal} closeModal={closeModal} />
      );
    }
  };

  return (
    <>
      {studentModal()}
      <Button varient="primary" className="mb-3" onClick={openModal}>
        Create New Entry
      </Button>
    </>
  );
}

export default CreateButton;
