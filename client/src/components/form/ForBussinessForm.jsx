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
import { Link, useNavigate } from "react-router-dom";
import { createBusiness, updateBusiness } from "../../redux/api";
import { getAllBusinessDetails } from "../../redux/actions/businessDetailsAction";
import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  address: Yup.string().required("Address is required"),
  cinNo: Yup.string().required("CIN Number is required"),
  panNo: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number")
    .required("PAN Number is required"),
  tanNo: Yup.string().required("TAN Number is required"),
  gstNo: Yup.string().required("GST Number is required"),
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
  { name: "gstNo", label: "GST Number", autoComplete: "gstNo", type: "text" }
];

const ESCAPE_CONSTANTS = ["proof", "gstCertificate", "cinCertificate"];

const INITIAL_VALUES = {
  companyName: "",
  address: "",
  cinNo: "",
  panNo: "",
  tanNo: "",
  gstNo: "",
  proof: "",
  gstCertificate: "",
  cinCertificate: "",
};

const ForBussinessForm = ({ data, overWrittenValidationSchema, isUpdate }) => {
  const form = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: overWrittenValidationSchema || validationSchema,
    onSubmit: async (_, { resetForm }) => {
      // Handle form submission logic here
      const formData = new FormData(form.current);
      if (isUpdate) {
        formData.append("_id", data._id);
        await dispatch(updateBusiness(formData));
        await dispatch(getAllBusinessDetails());
        navigate("/for-business-view");
      } else {
        await dispatch(createBusiness(formData));
      }
      resetForm();
    },
  });

  const { setFieldValue } = formik;

  const headerBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

  useEffect(() => {
    if (Object.keys(data).length !== 0 && isUpdate) {
      for (const key in data) {
        if (key in INITIAL_VALUES && !ESCAPE_CONSTANTS.includes(key)) {
          setFieldValue(key, data[key]);
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (!isUpdate) {
      for (const key in INITIAL_VALUES) {
        setFieldValue(key, "");
      }
    }
  }, [isUpdate]);

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
            to="/for-business-view"
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
            <Grid item xs={12} sm={6}>
              <CustTextField
                type="file"
                label="Proof/Document"
                name="proof"
                autoComplete="proof"
                value={formik.values["proof"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["proof"] && Boolean(formik.errors["proof"])
                }
                helperText={formik.touched["proof"] && formik.errors["proof"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={formik.values.proof ? "" : data.proof} height={100} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustTextField
                type="file"
                label="GST Certificate"
                name="gstCertificate"
                autoComplete="gstCertificate"
                value={formik.values["gstCertificate"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["gstCertificate"] && Boolean(formik.errors["gstCertificate"])
                }
                helperText={formik.touched["gstCertificate"] && formik.errors["gstCertificate"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={formik.values.gstCertificate ? "" : data.gstCertificate} height={100} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustTextField
                type="file"
                label="CIN Certificate"
                name="cinCertificate"
                autoComplete="cinCertificate"
                value={formik.values["cinCertificate"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched["cinCertificate"] && Boolean(formik.errors["cinCertificate"])
                }
                helperText={formik.touched["cinCertificate"] && formik.errors["cinCertificate"]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={formik.values.cinCertificate ? "" : data.cinCertificate} height={100} />
            </Grid>
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
