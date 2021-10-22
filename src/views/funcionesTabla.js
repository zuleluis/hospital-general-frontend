function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const funcTable = { 
  getComparator: (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  },
  stableSort: (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  },
  searchTable: (array, search) => {

    const expedienteFilter = array.filter(element => {
      return element.noexpediente.toString().indexOf(search) !== -1 ||
        element.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        element.apellido.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        element.edad.toString().indexOf(search) !== -1;
    });

    return expedienteFilter;
  }
}

export default funcTable;