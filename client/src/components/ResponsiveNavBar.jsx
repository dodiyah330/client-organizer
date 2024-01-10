// ResponsiveNavbar.js
import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Container, Grid, Toolbar, Typography, makeStyles } from '@material-ui/core';
import CustButton from './CustButton';

const useStyles = makeStyles((theme) => ({
  customToolbar: {
    padding: 0,
  },
}));

const ResponsiveNavbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className={classes.customToolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Client Details Organiser</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <CustButton component={Link} to='/personal-details' color="inherit">Personal Information</CustButton>
                </Grid>
                <Grid item>
                  <CustButton component={Link} to='/for-business' color="inherit">For Business</CustButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveNavbar;
