import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: "normal"
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(ID, Name, Email, Password, Action) {
  return { ID, Name, Email, Password, Action };
}

const rows = [
  createData('RD001', 'Banna Andrian', 'Bannaandrian@gmail.com', "24aa456", 4.0),
  createData('RD002', 'Elver Andries', 'Elverandries@gmail.com', "34aa456", 4.3),
  createData('RD003', 'Andria Elvera',  'Andriaelvera@gmail.com', "24aa456", 6.0),
  createData('RD004', 'Bangaly Andriana',  'Bangalyandriana@gmail.com', "64aa456", 4.3),
  createData('RD005', 'Andris Banta',  'Andrisbanta@gmail.com', "44aa456", 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} style={{maxWidth: '1200px'}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Password</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ID}>
              <StyledTableCell component="th" scope="row">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell >{row.Name}</StyledTableCell>
              <StyledTableCell >{row.Email}</StyledTableCell>
              <StyledTableCell >{row.Password}</StyledTableCell>
              <StyledTableCell >{row.Action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
