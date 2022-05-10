import React, { useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Updatepolicy from '../../components/Modal/updatePolicy';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProfilePic from '../../assets/Mask Group 5.png'
import DeleteBtn from '../../assets/delete.png'

import "./telecaller.css"


const theme = createTheme();

theme.typography.h3 = {

  typography: {

    fontFamily: [
      'Poppins'
    ].join(','),
  },

  fontSize: '1.8rem',
  fontWeight: 400,
  fontStyle: 'normal',

  '@media (max-width:850px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width:400px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },

};
theme.typography.h1 = {

  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },

  fontSize: '2.5rem',
  color: '#5016BF',
  '@media (max-width:800px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },

};
function createData(I, ID, Name, Email) {
  return { I, ID, Name, Email };
}

const rows = [
  createData('001', 'RD001', 'Banna Andrian', 'Bannaandrian@gmail.com'),
  createData('001', 'RD002', 'Elver Andries', 'Elverandries@gmail.com'),
  createData('001', 'RD003', 'Andria Elvera', 'Andriaelvera@gmail.com'),
  createData('001', 'RD004', 'Bangaly Andriana', 'Bangalyandriana@gmail.com'),
  createData('001', 'RD005', 'Andris Banta', 'Andrisbanta@gmail.com'),
];

function Telecaller() {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div className="main">
      <div className="slider">
        <Sidebar active="awwe" />
      </div>
      <div className="container">
        <Navbar name="Telecaller" />
        <div className="tableHead3">


          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="subhead">Telecaller's Information's</Typography>
          </ThemeProvider>
          <button className="btnaddnew" onClick={() => {
            setOpenModel(true)
          }} >
            <Typography variant="body" className="btntext">Add New Telecaller </Typography></button>
        </div>
        <div className="rider-table2" >

          <table>



            <tr>
              <th ><Typography variant="body">#</Typography> </th>
              <th>   <Typography variant="body">ID</Typography> </th>
              <th><Typography variant="body">Image</Typography> </th>
              <th><Typography variant="body">Name</Typography> </th>
              <th><Typography variant="body">Email</Typography> </th>
              <th><Typography variant="body"></Typography> </th>
            </tr>
            {rows.map((row, i) => (
              <tr key={i} >
                <td><Typography variant="body">{row.I}</Typography></td>
                <td><Typography variant="body">{row.ID}</Typography></td>
                <td><Typography variant="body"><img src={ProfilePic} className="tableimg" alt="" /></Typography></td>
                <td><Typography variant="body">{row.Name}</Typography></td>
                <td><Typography variant="body">{row.Email}</Typography></td>

                <td><img src={DeleteBtn} className="delete" alt="" /></td>
              </tr>
            ))}


          </table>

        </div>

      </div>
      {openModel && <Updatepolicy closeModel={setOpenModel} />}
    </div>
  )
}

export default Telecaller