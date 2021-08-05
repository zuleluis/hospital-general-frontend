import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import {
  TableCell,
  TableRow,
  TableSortLabel,
  TableHead
} from '@material-ui/core';

const TableHead2 = withStyles((theme) => ({
  root: {
    backgroundColor: "#558ED9",
  }
}))(TableHead);

const TableCell2 = withStyles((theme) => ({
  root: {
    color: "white"
  }
}))(TableCell);

export default function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort, headCells } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead2>
        <TableRow >
          {headCells.map((headCell) => (
            <TableCell2
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell2>
          ))}
        </TableRow>
      </TableHead2>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };
  