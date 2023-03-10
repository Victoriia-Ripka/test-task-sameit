/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { fetchDepartments } from "./fetchDepartments";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log("use effect")
    getDepartments(page);
  }, [page]);

  const getDepartments = async (page) => {
    try {
      await fetchDepartments(page).then(({ data }) => {
        setDepartments([...departments, ...data]);
      });

      if (page === 100) {
        setHasMore(false);
      }
    } catch (error) {}
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [departments]);

  return (
    <Container maxWidth="sm">
      <Box>Відділення Нової пошти у Києві</Box>
      <ul>
        {departments &&
          departments.map((item, index) => (
            <li key={index}>
              <p>{item.Description}</p>
            </li>
          ))}
      </ul>
    </Container>
  );
};

export default Departments;
