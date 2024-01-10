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
import { useDispatch } from "react-redux";
import { getAllBusinessDetails, deleteBusinessDetail } from "../../redux/actions/businessDetailsAction";

const ForBussinessTable = ({ data }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (index, id) => {
    setDeleteIndex(index);
    setDeleteId(id);
  };

  const handleDeleteConfirm = async () => {
    await dispatch(deleteBusinessDetail(deleteId));
    await dispatch(getAllBusinessDetails());
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
          {data?.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.companyName}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.cinNo}</TableCell>
              <TableCell>{row.panNo}</TableCell>
              <TableCell>{row.tanNo}</TableCell>
              <TableCell>{row.gstNo}</TableCell>
              <TableCell>
                <img src={row.proof} height={100} alt="" />
              </TableCell>
              <TableCell>
                <img src={row.gstCertificate} height={100} alt="" />
              </TableCell>
              <TableCell>
                <img src={row.cinCertificate} height={100} alt="" />
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  component={Link}
                  to={`/for-business/${row._id}`}
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

export default ForBussinessTable;
