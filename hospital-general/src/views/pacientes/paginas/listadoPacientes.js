import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import EnhancedTableHead from '../../EncabezadoTabla';
import funcTable from '../../funcionesTabla';
import EnhancedTableToolbar from './listadoPacientesEncabezado';
import { useEffect } from 'react';
import { useState } from 'react';

const headCells = [
  { id: 'noexpediente', numeric: false, label: 'No. de expediente' },
  { id: 'nombre', numeric: false, label: 'Nombre(s)' },
  { id: 'apellido', numeric: false, label: 'Apellidos' },
  { id: 'edad', numeric: true, label: 'Edad' },
  { id: 'sexo', numeric: false, label: 'Sexo' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  },
  table: {
    minWidth: 750,
    marginTop: theme.spacing(2),
    border: "1px solid #ccc",
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  row: {
    textDecoration: "none"
  }
}));

export default function ListadoPacientes() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('noexpediente');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');  
  
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch("/pacientes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPacientes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEnterSearch = (event) => {
    if (event.key === 'Enter') {
      setPacientes(funcTable.searchTable(pacientes,search)); 
    }
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleCancelSearch = (event) => {
    setPacientes([]);
    setSearch("");
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, pacientes.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
          handleEnterSearch = {handleEnterSearch}
          search = {search}
          handleSearch = {handleSearch}
          handleCancelSearch = {handleCancelSearch}
          />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              headCells={headCells}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {funcTable.stableSort(pacientes, funcTable.getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover tabIndex={-1}
                      key={row.noexpediente}
                      className={classes.row}
                      component={Link} to="pacientes/idpaciente"
                    >
                        <TableCell component="th" id={labelId} scope="row">
                          {row.NoExpediente}
                        </TableCell>
                        <TableCell >{row.Nombre}</TableCell>
                        <TableCell >{row.Apellidos}</TableCell>
                        <TableCell align="right">{row.Edad}</TableCell>
                        <TableCell >{row.Sexo}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={pacientes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
