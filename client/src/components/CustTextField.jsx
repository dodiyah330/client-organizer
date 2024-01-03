// CustTextField.js
import { TextField, InputLabel, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  fileInput: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  inputLabel: {
    position: "absolute",
    left: 14,
    top: 12,
    pointerEvents: "none",
    color: theme.palette.text.secondary,
  },
}));

function CustTextField({ label, type, ...params }) {
  const classes = useStyles();

  if (type === "file") {
    return (
      <div className={classes.fileInput}>
        <InputLabel className={classes.inputLabel}>{label}</InputLabel>
        <TextField
          fullWidth
          variant="filled"
          margin="dense"
          {...params}
          type="file"
          InputLabelProps={{ shrink: false }}
        />
      </div>
    );
  }

  return (
    <TextField
      fullWidth
      variant="filled"
      margin="dense"
      label={label}
      {...params}
    />
  );
}

export default CustTextField;
