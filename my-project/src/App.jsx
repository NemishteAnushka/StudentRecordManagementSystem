import React from "react";
import { Container } from "react-bootstrap";
import StudentRecordTable from "./component/StudentRecordTable";
import StudentProvider from "./contexts/StudentProvider";
function App() {
  return (
    <StudentProvider>
      <Container className="m-5">
        <StudentRecordTable />
      </Container>
    </StudentProvider>
  );
}

export default App;
