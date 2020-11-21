import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, DialogTitle, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createTableItem, updateTableItem } from '../../actions/table';

const Form = ({ currentId, setCurrentId, open, handleClose }) => {
  const [tableItemData, setTableItemData] = useState({ firstname: '', lastname: '', email: '', nickname: '', date: new Date() });
  const tableItem = useSelector((state) => (currentId ? state.table.find((item) => item._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (tableItem) setTableItemData(tableItem);
  }, [tableItem]);

  const clear = () => {
    setCurrentId(0);
    setTableItemData({ firstname: '', lastname: '', email: '', nickname: '', date: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createTableItem(tableItemData));
      clear();
    } else {
      dispatch(updateTableItem(currentId, tableItemData));
      clear();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="customized-dialog-title">
        <Typography variant="h6">{currentId ? `Editing "${tableItem.firstname} ${tableItem.lastname}"` : 'Creating a table row'}</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField name="firstname" variant="outlined" label="Firstname" fullWidth value={tableItemData.firstname} onChange={(e) => setTableItemData({ ...tableItemData, firstname: e.target.value })} />
          <TextField name="lastname" variant="outlined" label="Lastname" fullWidth value={tableItemData.lastname} onChange={(e) => setTableItemData({ ...tableItemData, lastname: e.target.value })} />
          <TextField name="email" variant="outlined" label="Email" fullWidth value={tableItemData.email} onChange={(e) => setTableItemData({ ...tableItemData, email: e.target.value })} />
          <TextField name="nickname" variant="outlined" label="Nickname" fullWidth value={tableItemData.nickname} onChange={(e) => setTableItemData({ ...tableItemData, nickname: e.target.value })} />
          <TextField name="date" variant="outlined" label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth value={tableItemData.date} onChange={(e) => setTableItemData({ ...tableItemData, date: e.target.value })} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default Form;
