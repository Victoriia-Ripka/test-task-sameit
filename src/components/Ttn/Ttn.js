import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const validationSchema = yup.object({
  TTN: yup.string("Enter your TTN number").required("number is required"),
});

const Ttn = () => {
  const initialState = {
    TTN: "",
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
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
          width: '100%',
          height: 300,
          backgroundColor: "secondary.main",
        }}
      >
        <p>Статус доставки: </p>
        <p></p>
        <p></p>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 300,
          backgroundColor: "secondary.main",
        }}
      >
        <p>Історія</p>
      </Box>
    </Container>
  );
};

export default Ttn;
