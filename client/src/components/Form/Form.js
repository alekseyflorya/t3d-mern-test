import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, DialogTitle, Dialog, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createTableItem, updateTableItem } from 'actions/table';
import isEmail from 'validator/es/lib/isEmail';

const Form = ({ currentId, setCurrentId, open, handleClose }) => {
  const [tableItemData, setTableItemData] = useState({ firstname: '', lastname: '', email: '', nickname: '', date: '' });
  const tableItem = useSelector((state) => (currentId ? state.table.find((item) => item._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if(tableItem) setTableItemData(tableItem);
    if(!open) clear()
    toggleError(tableItemData.email);
  }, [tableItem, open]);

  const clear = () => {
    setCurrentId(0);
    setTableItemData({ firstname: '', lastname: '', email: '', nickname: '', date: '' });
  };

  const toggleError = (mail) => {
    isEmail(mail) ? setIsError(false) : setIsError(true);
  }

  const handleBlur = (e) => {
    toggleError(e.target.value)
  }

  const handleChange = (e) => {

    if (e.target.name === 'email') toggleError(e.target.value);
    setTableItemData((prevTableItemData) => ({ ...prevTableItemData, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(isEmail(tableItemData.email)) {
      setIsError(false);
      if (currentId === 0) {
        dispatch(createTableItem(tableItemData));
        clear();
      } else {
        dispatch(updateTableItem(currentId, tableItemData));
      }

      handleClose();
      clear();
    } else {
      setIsError(true);
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
          <TextField name="firstname" variant="outlined" label="Firstname" fullWidth value={tableItemData.firstname} onChange={handleChange} />
          <TextField name="lastname" variant="outlined" label="Lastname" fullWidth value={tableItemData.lastname} onChange={handleChange} />
          <TextField name="email" error={isError} onBlur={handleBlur} type="email" variant="outlined" label="Email" fullWidth value={tableItemData.email} onChange={handleChange} />
          <TextField name="nickname" variant="outlined" label="Nickname" fullWidth value={tableItemData.nickname} onChange={handleChange} />
          <TextField name="date" variant="outlined" label="Date" type="date" InputLabelProps={{ shrink: true }} fullWidth value={tableItemData.date} onChange={handleChange} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={isError}>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    </Dialog>
  );
};

export default Form;
