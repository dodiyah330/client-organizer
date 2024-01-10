// PersonalDetails.js
import { useEffect, useRef } from "react";
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
import { useDispatch } from "react-redux";
import {
  createPerson,
  getAllPersonalDetails,
  updatePerson,
} from "../../redux/actions/personalDetailsActions";

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
  { label: "Proof", name: "proof", autoComplete: "proof", type: "file" },
];

const ESCAPE_CONSTANTS = ["proof"];

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  aadharNo: "",
  panNo: "",
  bankName: "",
  branch: "",
  accNo: "",
  ifscCode: "",
  proof: "",
};

const PersonalDetailsForm = ({
  data,
  overWrittenValidationSchema,
  isUpdate,
}) => {
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
        await dispatch(updatePerson(formData));
        await dispatch(getAllPersonalDetails());
        navigate("/personal-details-view");
      } else {
        await dispatch(createPerson(formData));
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
                key={index}
                item
                xs={12}
                sm={index === fields.length - 1 ? 12 : 6}
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
            {isUpdate && (
              <Grid item xs={12} sm={6}>
                <img src={formik.values.proof ? "" : data.proof} height={100} />
              </Grid>
            )}
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
