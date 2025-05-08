import React from "react";
import { Modal } from "react-bootstrap";
import { useGetStudentDataByIdQuery } from "./services/studentApi";

function StudentViewForm({ handleClose, showViewModal, id }) {
  const { data: studentDetails } = useGetStudentDataByIdQuery(id);
  console.log(studentDetails);
  return (
    <Modal show={showViewModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>View Student Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>ID of Student : {studentDetails?.id}</h5>
        <h5>Name of Student : {studentDetails?.name}</h5>
        <h5>Place of Student : {studentDetails?.place}</h5>
        <h5>Phone Number of Student : {studentDetails?.phone}</h5>
      </Modal.Body>
    </Modal>
  );
}

export default StudentViewForm;
