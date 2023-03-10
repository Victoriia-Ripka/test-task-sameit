import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { fetchDepartments } from "./fetchDepartments";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "PHPSESSID=e2ks7odckmv9iohk8l9s295v0l; YIICSRFTOKEN=eb9f413669daa60d85d90873873f39e63b599783s%3A88%3A%22UVFJcn5nMU5VTjZudk5vOVhHY0FYQ2o3X3JUQjhzb3JJRiyFI3no_32C21dFAtxTVo907OhhNiaDXaiZfAGH-w%3D%3D%22%3B"
);

const raw = JSON.stringify({
  apiKey: "b4ba80936e642b9d6aaa34545939b178",
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityName: "Київ",
    Page: "1",
    Limit: "10",
    Language: "UA",
  },
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  params: raw,
  redirect: "follow",
};

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    try {
      console.log("before fetch");
      // await fetchDepartments().then(({ data }) => {
      //   setDepartments(data);
      // });

      fetch("https://api.novaposhta.ua/v2.0/json/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

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
