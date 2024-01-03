// ForBussinessTable.js
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import ConfirmationModal from "../ConfirmationModal";

const ForBussinessTable = ({ data, onEdit, onDelete }) => {
  const theme = useTheme();

  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
  };

  const handleDeleteConfirm = () => {
    onDelete(deleteIndex);
    setDeleteIndex(null);
  };

  const handleDeleteCancel = () => {
    setDeleteIndex(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Company Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Address
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              CIN Number
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              PAN Number
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              TAN Number
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              GST Number
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Proof
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              GST Certificate
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              CIN Certificate
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.cinNo}</TableCell>
              <TableCell>{row.panNo}</TableCell>
              <TableCell>{row.tanNo}</TableCell>
              <TableCell>{row.gstNo}</TableCell>
              <TableCell>{row.proof}</TableCell>
              <TableCell>{row.gstCertificate}</TableCell>
              <TableCell>{row.cinCertificate}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  component={Link}
                  to={`/for-bussiness/${index}`}
                  onClick={() => onEdit(index)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleteClick(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ConfirmationModal
        open={deleteIndex !== null}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        message="Are you sure you want to delete this item?"
      />
    </TableContainer>
  );
};

export default ForBussinessTable;
