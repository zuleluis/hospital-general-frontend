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
  IconButton,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import EnhancedTableHead from '../../EncabezadoTabla';
import funcTable from '../../funcionesTabla';
import EnhancedTableToolbar from './listadoPacientesEncabezado';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

function createData(noexpediente, nombre, apellido, edad, sexo) {
  return { noexpediente, nombre, apellido, edad, sexo };
}

const rows = [
  createData(4913018, "VICTOR", "BARROSO BUSTO", 72,"Masculino"),
  createData(6592700, "RUBEN", "SANCHO GASCO", 51, "Masculino"),
  createData(9994891, "ALBERT", "LEON MORAN", 24, "Masculino"),
  createData(7281472, "ALBERTO", "PORTILLA REVUELTA", 24, "Masculino"),
  createData(3085173, "JOSE FRANCISCO", "TORRAS CLAVERO", 49, "Masculino"),
  createData(2150573, "ROBERTO", "SOUSA ALMENARA", 42, "Masculino"),
  createData(7317522, "VICTOR MANUEL", "ODRIOZOLA HEREDIA", 37, "Masculino"),
  createData(3802921, "ALFONSO", "LAGUNA CORONADO", 53, "Masculino"),
  createData(1642961, "JUAN MANUEL", "GARCIA TEIJEIRO", 65, "Masculino"),
  createData(5451605, "RUBEN", "SALGUEIRO BARRADO", 23, "Masculino"),
  createData(3359326, "LUIS MIGUEL", "PENA FERRERA", 20, "Masculino"),
  createData(7677589, "CRISTOBAL", "MOLLA ROJO", 29, "Masculino"),
  createData(6702870, "IGNACIO", "CUADRADO FALCON", 63, "Masculino"),
];

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
}));

export default function ListadoPacientes() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('noexpediente');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState(rows);

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
      setData(funcTable.searchTable(rows,search)); 
    }
  }
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleCancelSearch = (event) => {
    setData(rows);
    setSearch("");
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
              {funcTable.stableSort(data, funcTable.getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.noexpediente}
                    >
                        <TableCell component="th" id={labelId} scope="row">
                          {row.noexpediente}
                        </TableCell>
                        <TableCell >{row.nombre}</TableCell>
                        <TableCell >{row.apellido}</TableCell>
                        <TableCell align="right">{row.edad}</TableCell>
                        <TableCell >{row.sexo}</TableCell>
                        <TableCell>
                          <Link to="pacientes/idpaciente">
                            <IconButton aria-label="informacion">
                              <AssignmentRoundedIcon />
                            </IconButton>
                          </Link>
                          </TableCell>
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
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
