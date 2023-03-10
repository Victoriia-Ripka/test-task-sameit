import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { fetchDepartments } from "./fetchDepartments";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    try {
      console.log("before fetch");
      await fetchDepartments().then(({ data }) => {
        setDepartments(data);
      });

      console.log("after fetch");
    } catch (error) {}
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box>Відділення Нової пошти у Києві</Box>
      <ul>
        {departments &&
          departments.map((item) => (
            <li>
              <p>{item.Description}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Departments;
