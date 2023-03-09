import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTtns, postTtns } from "../../api/api";

const validationSchema = yup.object({
  TTN: yup.string("Enter your TTN number").required("number is required"),
});

const Ttn = () => {
  const queryClient = useQueryClient();
  const query = useQuery("ttns", getTtns);
  const mutation = useMutation(postTtns, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("ttns");
    },
  });

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
            mutation.mutate({
              id: values,
            });
            console.log(query.data)
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
          width: "100%",
          height: "260px",
          p: "20px",
          my: "20px",
          backgroundColor: "secondary.main",
        }}
      >
        <p>Статус доставки: </p>
        <p></p>
        <p></p>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "260px",
          p: "20px",
          my: "20px",
          backgroundColor: "secondary.main",
        }}
      >
        <p>Історія</p>
        <ul>
          {query.data && query.data.map((ttn) => (
            <li key={ttn.id}>{ttn.id}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
};

export default Ttn;
