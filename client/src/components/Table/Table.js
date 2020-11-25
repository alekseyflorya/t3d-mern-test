import React from 'react';
import {
  Grid,
  Table as TableBox,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox, Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { deleteTableItem } from 'actions/table';

import TableItem from './TableItem/TableItem';
import useStyles from './styles';
import { Preloader } from 'components/Preloader'

const Table = ({ setCurrentId, handleClickOpen }) => {
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = table.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const deleteItems = () => selected.map((item) => dispatch(deleteTableItem(item)));
  const rowCount = table.length;

  return (
    !table.length ? <Preloader /> : (<>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <TableContainer component={Paper}>
          <TableBox className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < table.length}
                    checked={rowCount > 0 && selected.length === rowCount}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell align="right">Firstname</TableCell>
                <TableCell align="right">Lastname</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Nickname</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table.map((item, index) => {
                const isItemSelected = isSelected(item._id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return <TableItem key={item._id} labelId={labelId} tableItem={item} isItemSelected={isItemSelected} setCurrentId={setCurrentId} handleClick={handleClick} handleClickOpen={handleClickOpen} />;
              })}
            </TableBody>
          </TableBox>
        </TableContainer>
      </Grid>
      <Grid className={classes.container} container justify="center" alignItems="stretch" spacing={3}>
        <Button variant="contained" color="primary" size="large" onClick={handleClickOpen}>Create</Button>
        <Button variant="contained" color="secondary" size="large" onClick={deleteItems}>Delete</Button>
      </Grid>
    </>)
  );
};

export default Table;
