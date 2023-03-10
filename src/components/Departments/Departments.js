import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Departments = () => {
  // eslint-disable-next-line
  const [departments, setdepartments] = useState([]);
  return (
    <Container maxWidth="sm">
      <Box>Departments component</Box>
      <ul>
        {departments &&
          departments.map((item) => {
            return item;
          })}
      </ul>
    </Container>
  );
};

export default Departments;
