// PersonalDetailsTable.js
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
import {
  deletePersonDetails,
  getAllPersonalDetails,
} from "../../redux/actions/personalDetailsActions";
import { useDispatch } from "react-redux";

const PersonalDetailsTable = ({ data, onEdit }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (index, id) => {
    setDeleteIndex(index);
    setDeleteId(id);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deletePersonDetails(deleteId));
    await dispatch(getAllPersonalDetails());
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
              First Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Last Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Aadhar Number
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
              Bank Name
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Branch
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              Account Number
            </TableCell>
            <TableCell
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              IFSC Code
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
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.aadharNo}</TableCell>
              <TableCell>{row.panNo}</TableCell>
              <TableCell>{row.bankName}</TableCell>
              <TableCell>{row.branch}</TableCell>
              <TableCell>{row.accNo}</TableCell>
              <TableCell>{row.ifscCode}</TableCell>
              <TableCell>
                <img src={row.proof} height={100} alt="" />
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  component={Link}
                  to={`/personal-details/${row._id}`}
                  onClick={() => onEdit(index)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleteClick(index, row._id)}
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

export default PersonalDetailsTable;
