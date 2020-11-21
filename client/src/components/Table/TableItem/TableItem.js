import React from 'react';
import { Button, Checkbox, TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const TableItem = ({ tableItem, setCurrentId, handleClick, isItemSelected, labelId, handleClickOpen }) => {

  const handleClickEdit = () => {
    handleClickOpen();
    setCurrentId(tableItem._id);
  };

  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, tableItem._id)}
      role="checkbox"
      selected={isItemSelected}
      aria-checked={isItemSelected}
      tabIndex={-1}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCell>
      <TableCell align="right">{tableItem.firstname}</TableCell>
      <TableCell align="right">{tableItem.lastname}</TableCell>
      <TableCell align="right" component="th" id={labelId} scope="row">{tableItem.email}</TableCell>
      <TableCell align="right">{tableItem.nickname}</TableCell>
      <TableCell align="right">{tableItem.date}</TableCell>
      <TableCell align="right">
        <Button size="small" style={{ color: '#3f51b5' }} onClick={handleClickEdit}><EditIcon fontSize="default" /></Button>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
