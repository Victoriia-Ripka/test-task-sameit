import React from "react";
import PageNotFound from "../img/NotFound.jpg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <img src={PageNotFound} alt="Page Not Found" width="100%" />
      </Box>
    </Container>
  );
};

export default NotFoundPage;
