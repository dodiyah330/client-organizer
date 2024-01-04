// ForBussinessForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Typography,
  Container,
  CssBaseline,
  Grid,
  Box,
} from "@material-ui/core";
import CustTextField from "../CustTextField";
import CustButton from "../CustButton";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  address: Yup.string().required("Address is required"),
  cinNo: Yup.string().required("CIN Number is required"),
  panNo: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number")
    .required("PAN Number is required"),
  tanNo: Yup.string().required("TAN Number is required"),
  gstNo: Yup.string().required("GST Number is required"),
  proof: Yup.string().required("Proof/Document is required"),
  gstCertificate: Yup.string().required("GST Certificate is required"),
  cinCertificate: Yup.string().required("CIN Certificate is required"),
});

const fields = [
  {
    name: "companyName",
    label: "Company Name",
    autoComplete: "companyName",
    type: "text",
  },
  { name: "address", label: "Address", autoComplete: "address", type: "text" },
  { name: "cinNo", label: "CIN Number", autoComplete: "cinNo", type: "text" },
  { name: "panNo", label: "PAN Number", autoComplete: "panNo", type: "text" },
  { name: "tanNo", label: "TAN Number", autoComplete: "tanNo", type: "text" },
  { name: "gstNo", label: "GST Number", autoComplete: "gstNo", type: "text" },
  {
    name: "proof",
    label: "Proof/Document",
    autoComplete: "proof",
    type: "file",
  },
  {
    name: "gstCertificate",
    label: "GST Certificate",
    autoComplete: "gstCertificate",
    type: "file",
  },
  {
    name: "cinCertificate",
    label: "CIN Certificate",
    autoComplete: "cinCertificate",
    type: "file",
  },
];

const ForBussinessForm = () => {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      address: "",
      cinNo: "",
      panNo: "",
      tanNo: "",
      gstNo: "",
      proof: "",
      gstCertificate: "",
      cinCertificate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
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
            Business Details
          </Typography>
          <CustButton
            component={Link}
            to="/for-bussiness-view"
            variant="contained"
            color="primary"
          >
            View
          </CustButton>
        </Box>
        <form onSubmit={formik.handleSubmit}>
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

export default ForBussinessForm;
