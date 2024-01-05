import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveNavbar from "../components/ResponsiveNavBar";
import { getPersonalDetails } from "../redux/actions/personalDetailsActions";
import PersonalDetailsForm from "../components/form/PersonalDetailsForm";

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
});

function PersonalDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedPersonDetails } = useSelector(
    (state) => state.personalDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(getPersonalDetails(id));
    }
  }, []);

  return (
    <div>
      <ResponsiveNavbar />
      <PersonalDetailsForm
        data={selectedPersonDetails}
        overWrittenValidationSchema={validationSchema}
        isUpdate={id !== undefined}
      />
    </div>
  );
}

export default PersonalDetails;
