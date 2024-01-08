import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveNavbar from "../components/ResponsiveNavBar";
import { getBusinessDetails } from "../redux/actions/businessDetailsAction";
import BusinessDetailsForm from "../components/form/ForBussinessForm";

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  address: Yup.string().required("Address is required"),
  cinNo: Yup.string().required("CIN Number is required"),
  panNo: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number")
    .required("PAN Number is required"),
  tanNo: Yup.string().required("TAN Number is required"),
  gstNo: Yup.string().required("GST Number is required")
});

function ForBussiness() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedBusinessDetails } = useSelector(
    (state) => state.businessDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(getBusinessDetails(id));
    }
  }, []);

  return (
    <div>
      <ResponsiveNavbar />
      <BusinessDetailsForm
        data={selectedBusinessDetails}
        overWrittenValidationSchema={validationSchema}
        isUpdate={id !== undefined}
      />
    </div>
  );
}

export default ForBussiness;
