import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Table from 'components/Table/Table';
import Form from 'components/Form/Form';
import { getTable } from 'actions/table';
import useStyles from './styles';

const App = () => {
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTable());
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">MERN T3D</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Table
                setCurrentId={setCurrentId}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form
                currentId={currentId}
                setCurrentId={setCurrentId}
                open={open}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
