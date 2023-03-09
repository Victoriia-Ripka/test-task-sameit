import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink as ReactNav } from "react-router-dom";

const Navigation = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              p: 0,
            }}
          >
            <Button
              to="/ttn"
              component={ReactNav}
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
              }}
            >
              Перевірити ТТН
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              p: 0,
              pl: "16px",
            }}
          >
            <Button to="/departments" component={ReactNav} variant="contained">
              Список відділень
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Navigation;
