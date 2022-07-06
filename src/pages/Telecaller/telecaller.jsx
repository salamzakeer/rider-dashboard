import React, { useState } from "react";
// import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

import ProfilePic from '../../assets/Mask Group 5.png'
import DeleteBtn from '../../assets/delete.png'
import AddRider from '../../components/Modal/AddRiderPopup';

import "./telecaller.css"
import Layout from "../../components/layout/Navbar";
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from "@mui/material";


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
    <Layout title="Telecaller" >
      <div className="rider-head-details">
        <div className="rider-info" >Telecaller Information's</div>
        <button className="button-cus" onClick={() => {
          setOpenModel(true)
        }} >Add New Rider</button>
      </div>


      <div style={{
        overflowX: "auto",
        marginTop: "2rem"
      }}
        className="table-telecaller"
      >

        <table style={{
          width: "100%", borderCollapse: 'collapse',
          borderSpacing: 0,
        }}>



          <tr>
            <th ><Typography variant="body">#</Typography> </th>
            <th>   <Typography variant="body">ID</Typography> </th>
            <th><Typography variant="body">Image</Typography> </th>
            <th><Typography variant="body">Name</Typography> </th>
            <th><Typography variant="body">Email</Typography> </th>
            <th><Typography variant="body">Delete</Typography> </th>
          </tr>
          {rows.map((row, i) => (
            <tr key={i} style={{ margin: "1rem 0rem" }} >
              <td ><Typography variant="body">0{i + 1}</Typography></td>
              <td><Typography variant="body">{row.ID}</Typography></td>
              <td align="center" >
                <Avatar
                  sx={{
                    width: "40px",
                    height: "40px",
                    textTransform: "capitalize",
                    textAlign: "center",
                    margin: "0 auto"
                  }}
                  // src={ProfilePic}
                  alt="user"
                >
                  {row.Name[0]}
                </Avatar>
              </td>
              {/* <td><Typography variant="body"><img src={ProfilePic} className="tableimg" alt="" /></Typography></td> */}
              <td style={{ textAlign: "start !important", paddingLeft: "8px" }} ><p style={{ textAlign: "left", margin: "0px", paddingLeft: "8px" }} >{row.Name}</p></td>
              <td style={{ textAlign: "start !important", paddingLeft: "8px !important" }} ><p style={{ textAlign: "left", margin: "0px", paddingLeft: "8px" }}  >{row.Email}</p></td>

              <td>

                <DeleteIcon sx={{ color: "red", opacity: "0.8", ": &hover": { opacity: "1" }, cursor: "pointer" }} />
              </td>
            </tr>
          ))}


        </table>

      </div>

      {openModel && <AddRider closeModel={setOpenModel} />}

    </Layout >)
}

export default Telecaller