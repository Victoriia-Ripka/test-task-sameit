import React from "react";
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Sidebar } from "react-pro-sidebar";

const ttnValidationSchema = yup
  .string("Enter your TTN number")
  .required("number is required");

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
  const formik = useFormik({
    initialValues: {
      TTN: "",
    },
    validationSchema: ttnValidationSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Root >
      <Box sx={{ mr: "30px" }}>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="TTN"
              name="TTN"
              label="TTN"
              value={formik.values.TTN}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            ></TextField>
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{mt: "10px"}}>
              Get Status TTN
            </Button>
          </form>
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
