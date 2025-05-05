import React, { useReducer, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function StudentCreateForm({ showModal, closeModal }) {
  //state for error
  const [error, setError] = useState({
    id: "",
    name: "",
    place: "",
    phone: "",
  });

  const validation = (value) => {
    let errorMsg = {};
    if (!value.id) {
      errorMsg.id = "Id is required";
    }
    if (!value.name) {
      errorMsg.name = "Name is required";
    }
    if (!value.place) {
      errorMsg.place = "Place is required";
    }
    if (!value.phone) {
      errorMsg.phone = "Phone is required";
    }
    return errorMsg;
  };

  const formReducer = (state, action) => {
    if (action.type === "HANDLE_FORM") {
      return { ...state, [action.name]: action.value };
    }
    if (action.type === "RESET") {
      return initialState;
    } else {
      return state;
    }
  };
  const initialState = {
    id: "",
    name: "",
    place: "",
    phone: "",
  };
  //useReducer
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleOnChange = (e) => {
    dispatch({
      type: "HANDLE_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    const errorField = validation(state);
    console.log(errorField);
    setError(errorField);
  };

  return (
    <>
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create Student Form</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                placeholder="Enter Student Id"
                value={state.id}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Student Name"
                value={state.name}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                name="place"
                placeholder="Enter Student Place"
                value={state.place}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter Student Phone"
                value={state.phone}
                onChange={handleOnChange}
              />
            </div>
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
    </>
  );
}

export default StudentCreateForm;
