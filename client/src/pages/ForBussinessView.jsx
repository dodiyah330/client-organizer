// ForBussinessView.js
import React from "react";
import ForBussinessTable from "../components/table/ForBussinessTable";
import { Box, Container } from "@material-ui/core";
import CustButton from "../components/CustButton";
import { Link } from "react-router-dom";

const ForBussinessView = () => {
  const data = [
    {
      companyName: "ABC Inc.",
      address: "123 Main St, City",
      cinNo: "U12345AB6789CD012345",
      panNo: "ABCDE1234F",
      tanNo: "TAN1234567A",
      gstNo: "GST123456789012",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
    },
    {
      companyName: "XYZ Ltd.",
      address: "456 Park Ave, Town",
      cinNo: "U56789CD0123EF456789",
      panNo: "FGHIJ5678K",
      tanNo: "TAN8901234B",
      gstNo: "GST987654321098",
      proof: "Proof Document",
      gstCertificate: "GST Certificate",
      cinCertificate: "CIN Certificate",
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
        <h2>For Business View</h2>
        <CustButton
          component={Link}
          to="/for-bussiness"
          variant="contained"
          color="primary"
        >
          back
        </CustButton>
      </Box>
      <ForBussinessTable data={data} />
    </Container>
  );
};

export default ForBussinessView;
