import React from "react";
import { Container } from "react-bootstrap";
import StudentRecordTable from "./component/StudentRecordTable";
function App() {
  return (
    <Container className="m-5">
      <StudentRecordTable />
    </Container>
  );
}

export default App;
