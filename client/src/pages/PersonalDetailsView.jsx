// Example usage in another component
import React from "react";
import PersonalDetailsTable from "../components/table/PersonalDetailsTable";
import { Box, Container } from "@material-ui/core";
import CustButton from "../components/CustButton";
import { Link } from "react-router-dom";

const PersonalDetailsView = () => {
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      aadharNo: "123456789012",
      panNo: "ABCDE1234F",
      bankName: "Sample Bank",
      branch: "Main Branch",
      accNo: "1234567890",
      ifscCode: "ABCD1234567",
      proof: "Proof Document",
    },
    {
      firstName: "John",
      lastName: "Doe",
      aadharNo: "123456789012",
      panNo: "ABCDE1234F",
      bankName: "Sample Bank",
      branch: "Main Branch",
      accNo: "1234567890",
      ifscCode: "ABCD1234567",
      proof: "Proof Document",
    },
    {
      firstName: "John",
      lastName: "Doe",
      aadharNo: "123456789012",
      panNo: "ABCDE1234F",
      bankName: "Sample Bank",
      branch: "Main Branch",
      accNo: "1234567890",
      ifscCode: "ABCD1234567",
      proof: "Proof Document",
    },
    // Add more data as needed
  ];

  const headerBoxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

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
      <PersonalDetailsTable data={data} />
    </Container>
  );
};

export default PersonalDetailsView;
