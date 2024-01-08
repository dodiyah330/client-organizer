// PersonalDetailsView.js 
import { useEffect } from "react";
import PersonalDetailsTable from "../components/table/PersonalDetailsTable";
import { Box, Container } from "@material-ui/core";
import CustButton from "../components/CustButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPersonalDetails } from "../redux/actions/personalDetailsActions";

const PersonalDetailsView = () => {
  const dispatch = useDispatch();
  const { allPersonalDetails, status, error } = useSelector(
    (state) => state.personalDetails
  );

  const headerBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

  useEffect(() => {
    // Dispatch the action to fetch personal details when the component mounts
    dispatch(getAllPersonalDetails());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Box style={headerBoxStyle}>
        <h2>Personal Details View</h2>
        <CustButton
          component={Link}
          to="/personal-details"
          variant="contained"
          color="primary"
        >
          back
        </CustButton>
      </Box>
      <PersonalDetailsTable data={allPersonalDetails} />
    </Container>
  );
};

export default PersonalDetailsView;
