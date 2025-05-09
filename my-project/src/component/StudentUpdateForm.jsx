import React, { useEffect, useReducer } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {
  useGetStudentDataByIdQuery,
  useUpdateStudentDataMutation,
} from "./services/studentApi";

function StudentUpdateForm({ updateModal, closeUpdateModal, id }) {
  const { data: studData } = useGetStudentDataByIdQuery(id);
  const [updateStudent] = useUpdateStudentDataMutation();
  const initialState = {
    id: "",
    name: "",
    place: "",
    phone: "",
  };
  const formReducer = (state, action) => {
    console.log(action.payload);
    if (action.type === "SET_FORM") {
      return { ...state, ...action.payload };
    } else if (action.type === "RESET") {
      return studData;
    } else if (action.type === "HANDLE_CHANGE") {
      return { ...state, [action.name]: action.value };
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialState);
  useEffect(() => {
    if (studData) {
      dispatch({ type: "SET_FORM", payload: studData });
    }
  }, [studData]);
  const handleOnChange = (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      name: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmit = async () => {
    try {
      let payload = updateStudent(state);
      if (payload) {
        closeUpdateModal();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={updateModal} onHide={closeUpdateModal} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Update Student Entry</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                placeholder="Enter Student Id"
                defaultValue={state?.id}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Student Name"
                value={state.name}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                name="place"
                placeholder="Enter Student Place"
                value={state.place}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter Student Phone"
                value={state.phone}
                onChange={handleOnChange}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "RESET",
              });
            }}
          >
            Reset
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default StudentUpdateForm;
