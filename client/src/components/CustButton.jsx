// CustButton.js
import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  customButton: {
    "&:hover": {
      color: "#000000",
    },
  },
}));

const CustButton = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.customButton} {...props}>
      {children}
    </Button>
  );
};

export default CustButton;
