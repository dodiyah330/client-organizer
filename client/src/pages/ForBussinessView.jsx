// ForBussinessView.js
import React, { useEffect } from "react";
import ForBussinessTable from "../components/table/ForBussinessTable";
import { Box, Container } from "@material-ui/core";
import CustButton from "../components/CustButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinessDetails } from "../redux/actions/businessDetailsAction";

const ForBussinessView = () => {
  const dispatch = useDispatch();
  const { allBusinessDetails, status, error } = useSelector(
    (state) => state.businessDetails
  );
  
  const headerBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

  useEffect(() => {
    // Dispatch the action to fetch business details when the component mounts
    dispatch(getAllBusinessDetails());
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
        <h2>For Business View</h2>
        <CustButton
          component={Link}
          to="/for-business"
          variant="contained"
          color="primary"
        >
          back
        </CustButton>
      </Box>
      <ForBussinessTable data={allBusinessDetails} />
    </Container>
  );
};

export default ForBussinessView;
