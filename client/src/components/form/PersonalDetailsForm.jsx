// PersonalDetails.js
import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Box,
} from "@material-ui/core";
import CustTextField from "../CustTextField";
import CustButton from "../CustButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPerson } from "../../redux/actions/personalDetailsActions";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  aadharNo: Yup.string()
    .matches(/^[2-9]{1}[0-9]{11}$/, "Invalid Aadhar Number")
    .required("Aadhar Number is required"),
  panNo: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number")
    .required("PAN Number is required"),
  bankName: Yup.string().required("Bank Name is required"),
  branch: Yup.string().required("Branch Name is required"),
  accNo: Yup.string()
    .matches(/^\d{9,18}$/, "Invalid Account Number")
    .required("Account Number is required"),
  ifscCode: Yup.string()
    .matches(/^[A-Za-z]{4}\d{7}$/, "Invalid IFSC Code")
    .required("IFSC Code is required"),
  proof: Yup.mixed().required("Proof is required"),
});

const fields = [
  {
    name: "firstName",
    label: "First Name",
    autoComplete: "firstName",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    autoComplete: "lastName",
    type: "text",
  },
  {
    name: "aadharNo",
    label: "Aadhar Number",
    autoComplete: "aadharNo",
    type: "text",
  },
  { name: "panNo", label: "PAN Number", autoComplete: "panNo", type: "text" },
  {
    name: "bankName",
    label: "Bank Name",
    autoComplete: "bankName",
    type: "text",
  },
  {
    name: "branch",
    label: "Branch Name",
    autoComplete: "branch",
    type: "text",
  },
  {
    name: "accNo",
    label: "Account Number",
    autoComplete: "accNo",
    type: "text",
  },
  {
    name: "ifscCode",
    label: "IFSC Code",
    autoComplete: "ifscCode",
    type: "text",
  },
  { name: "proof", label: "Proof", autoComplete: "proof", type: "file" },
];

const PersonalDetailsForm = ({ data }) => {
  const form = useRef();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      aadharNo: "",
      panNo: "",
      bankName: "",
      branch: "",
      accNo: "",
      ifscCode: "",
      proof: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (_, { resetForm }) => {
      // Handle form submission logic here
      const formData = new FormData(form.current);
      await dispatch(createPerson(formData));
      resetForm();
    },
  });

  const headerBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div>
        <Box style={headerBoxStyle}>
          <Typography component="h1" variant="h5">
            Personal Details
          </Typography>
          <CustButton
            component={Link}
            to="/personal-details-view"
            variant="contained"
            color="primary"
          >
            View
          </CustButton>
        </Box>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid
                item
                xs={12}
                sm={index === fields.length - 1 ? 12 : 6}
                key={field.name}
              >
                <CustTextField
                  type={field.type}
                  id={field.name}
                  label={field.label}
                  name={field.name}
                  autoComplete={field.autoComplete}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  helperText={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                />
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              style={{ display: "flex" }}
              justifyContent="flex-end"
            >
              <CustButton type="submit" variant="contained" color="primary">
                Submit
              </CustButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default PersonalDetailsForm;
