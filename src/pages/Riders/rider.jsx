import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../../axios';

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import AddRider from '../../components/Modal/AddRiderPopup';

import ProfilePic from '../../assets/Mask Group 5.png'
import DeleteBtn from '../../assets/delete.png'
import Layout from "../../components/layout/Navbar";


import "./rider.css"
import Dialog from '@mui/material/Dialog';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

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

// ===================================================================
// const handleApi = () => {

//   axios.get('https://dcaapi.moodfor.codes/rider/register')
//       .then(result => {
//           // console.log(result)
//           // if(result.errorMessage == false){
//           console.log("working")
//           // }else{
//           //     console.log("logged error")
//           // }


//       })
//       .catch(error => {
//           console.log(error)
//           alert("fail")
//           // console.log("not ok")
//       })

// }



// ====================================================================
const rows = [
  createData('001', 'RD001', 'Banna Andrian', 'Bannaandrian@gmail.com'),
  createData('001', 'RD002', 'Elver Andries', 'Elverandries@gmail.com'),
  createData('001', 'RD003', 'Andria Elvera', 'Andriaelvera@gmail.com'),
  createData('001', 'RD004', 'Bangaly Andriana', 'Bangalyandriana@gmail.com'),
  createData('001', 'RD005', 'Andris Banta', 'Andrisbanta@gmail.com'),
];

function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const modelClose = () => {
    console.log("close model")
    setOpenModel(false)
  }

  useEffect(() => {
    axios.get('/rider')
      .then(res => {
        setData(res.data)
        console.log("working", res.data)
        setLoading(true)

      })
      .catch(error => {
        console.log(error)
        setLoading(true)
      })
  }, [])



  return (
    <Layout title="Rider" >


      <div className="rider-tble" >
        <div className="rider-head-details">
          <div className="rider-info" >Riders Information's</div>
          <button className="button-cus" onClick={() => {
            setOpenModel(true)
          }} >Add New Rider</button>
        </div>
        <div className="table-rider"
        >
          <table style={{
            width: "100%", borderCollapse: 'collapse',
            borderSpacing: 0,
          }}>

            <br />
            <br />

            <tr>
              <th ><Typography variant="body">#</Typography> </th>
              <th>   <Typography variant="body">ID</Typography> </th>
              <th><Typography variant="body">Image</Typography> </th>
              <th><Typography variant="body">Name</Typography> </th>
              <th><Typography variant="body">Email</Typography> </th>
              <th><Typography variant="body">Detele</Typography> </th>
            </tr>


            {
              !Loading
              && <tr style={{ borderCollapse: 'collapse', padding: "0px !important" }}>

                <td style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  padding: "0px !important"
                }} colspan="6">
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                </td>
              </tr>}

            {data && data.length > 0 && data.map(data => (
              <tr>
                <td><Typography variant="body">{data.id}</Typography></td>
                <td><Typography variant="body">{data.id}</Typography></td>
                <td><Typography variant="body"><img src={ProfilePic} className="tableimg" alt="" /></Typography></td>

                {/* <td><Typography variant="body">{data.id}</Typography></td> */}
                <td><Typography variant="body">{data.fullName}</Typography></td>
                <td><Typography variant="body">{data.email}</Typography></td>
                <td><img src={DeleteBtn} className="delete" alt="" /></td>

              </tr>
            ))}
            {
              data.length === 0 && Loading
              && <tr style={{ borderCollapse: 'collapse' }}>

                <td style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }} colspan="6"><Typography variant="body" >No data</Typography></td>
              </tr>}




          </table>
        </div>
      </div>


      {openModel && <AddRider closeModel={setOpenModel} />}
      {/* <Dialog
        open={openModel}
        closeModel={modelClose}
        keepMounted
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        sdsd */}
      {/* <AddRider closeModel={modelClose} open={openModel} /> */}
      {/* </Dialog> */}
    </Layout >

  )
}

export default Newrider