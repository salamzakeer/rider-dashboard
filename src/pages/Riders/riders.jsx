import React, { useState } from "react";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ProfilePic from '../../assets/Mask Group 5.png'

import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import AddRider from '../../components/Modal/AddRiderPopup';


import "./riders.css"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontStyle: "normal",
    border: 0
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
    fontFamily: 'Poppins',  
    color: '#707070',
    textAlign : 'left',
    fontWeight: 400,
    fontStyle: "normal"
    

  },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
   '&:frist-child td, &:frist-child th': {
    border: 2,
  },
}));

function createData(ID, Name, Email, Password) {
  return { ID, Name, Email, Password};
}

const rows = [
  createData('RD001', 'Banna Andrian', 'Bannaandrian@gmail.com', "24aa456"),
  createData('RD002', 'Elver Andries', 'Elverandries@gmail.com', "34aa456"),
  createData('RD003', 'Andria Elvera',  'Andriaelvera@gmail.com', "24aa456"),
  createData('RD004', 'Bangaly Andriana',  'Bangalyandriana@gmail.com', "64aa456"),
  createData('RD005', 'Andris Banta',  'Andrisbanta@gmail.com', "44aa456"),
];


function Riders() {
    
  const [openModel, setOpenModel] = useState(false);

    return (
        <div className="main">
          {openModel && <AddRider closeModel={setOpenModel} />}
            <div className="slider">
                <Sidebar />
            </div>
            
            <div className="container">
            <Navbar />

               

                <div className="tablebox">

                    <div className="tableHead">
                    <h1>Riders Information's</h1>
                    <button type="#" className="login-submit" onClick={() => {
                      setOpenModel(true);}}>
                        Add New Rider </button>
                    {/* <AddUserPopup trigger={true}/> */}
                    
                    </div>

                     {/* ========== Table ==========*/}
                <div className="mainTable">
                <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
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
              <StyledTableCell ><img src={ProfilePic} alt="" /></StyledTableCell>
              <StyledTableCell >{row.Name}</StyledTableCell>
              <StyledTableCell >{row.Email}</StyledTableCell>
              <StyledTableCell >{row.Password}</StyledTableCell>
              <StyledTableCell ><button className="Deletebtn">delete</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </div>           
                </div>
                {/* ========== Table ==========*/}

            </div>
            {openModel && <AddRider closeModel={setOpenModel} />}
        </div>

    )


}

export default Riders;