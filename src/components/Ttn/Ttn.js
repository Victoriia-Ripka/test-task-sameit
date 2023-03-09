import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Sidebar } from "react-pro-sidebar";

const validationSchema = yup.object({
  TTN: yup.string("Enter your TTN number").required("number is required"),
});

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("xs")]: {
    // backgroundColor: "black",
    width: "95%",
    margin: "auto",
    display: "block",
    padding: "0 16px",
  },
  [theme.breakpoints.up("sm")]: {
    // backgroundColor: "blue",
    width: "570px",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
}));

const RootSidebar = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "95%",
    margin: "auto",
    height: "200px",
    // backgroundColor: "white",
  },
  [theme.breakpoints.up("md")]: {
    width: "167px",
    height: "50vh",
    // backgroundColor: "blue",
  },
}));

const Ttn = () => {
  const initialState = {
    TTN: "",
  };

  return (
    <Root>
      <Box sx={{ pr: "30px" }}>
        <Box>
          <Formik
            initialValues={initialState}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <Field name="TTN" placeholder="TTN number" />
              <ErrorMessage name="TTN" component="p" />

              <button type="submit">Get Status TTN</button>
            </Form>
          </Formik>
        </Box>
        <Box
          sx={{
            width: "calc(100%-40px)",
            height: "260px",
            p: "20px",
            my: "20px",
            backgroundColor: "secondary.main",
          }}
        >
          <Typography>Статус доставки: </Typography>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
      </Box>
      <RootSidebar>
        <Sidebar sx={{ width: "auto", minWidth: 0 }}>
          <Box>
            <Typography>Історія</Typography>
          </Box>
        </Sidebar>
      </RootSidebar>
    </Root>
  );
};

export default Ttn;
