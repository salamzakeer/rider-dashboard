import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../../axios';

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import AddRider from '../../components/Modal/AddRiderPopup';

import ProfilePic from '../../assets/Mask Group 5.png'
import DeleteBtn from '../../assets/delete.png'


import "./rider.css"


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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/rider')
      .then(res => {
        setData(res.data)
        console.log("working", res.data)

      })
      .catch(error => {
        console.log(error)
      })
  }, [])



  return (
    <div className="main">
      <div className="slider">
        <Sidebar />
      </div>
      <div className="container">
        <Navbar name="Riders" />
        <div className="tableHead2">


          <ThemeProvider theme={theme}>
            <div className="headclass"><Typography variant="h3" className="subhead">Riders Information's</Typography></div>
          </ThemeProvider>
          <button className="btnaddnew" onClick={() => {
            setOpenModel(true)
          }} >
            <Typography variant="body" className="btntext">Add New Rider </Typography></button>
        </div>
        <div className="rider-table" >

          <table>



            <tr>
              <th ><Typography variant="body">#</Typography> </th>
              <th>   <Typography variant="body">ID</Typography> </th>
              <th><Typography variant="body">Image</Typography> </th>
              <th><Typography variant="body">Name</Typography> </th>
              <th><Typography variant="body">Email</Typography> </th>
              <th><Typography variant="body"></Typography> </th>
            </tr>

            {/* {data.map((row, i) => (
              <tr key={i}>
                <td><Typography variant="body">{row.I}</Typography></td>
                <td><Typography variant="body">{row.ID}</Typography></td>
                <td><Typography variant="body"><img src={ProfilePic} className="tableimg" alt="" /></Typography></td>
                <td><Typography variant="body">{row.Name}</Typography></td>
                <td><Typography variant="body">{row.Email}</Typography></td>

                <td><img src={DeleteBtn} className="delete" alt="" /></td>
              </tr>
            ))} */}

            {data && data.length > 0 && data.map(data => (
              <tr>
                <td><Typography variant="body">{data.id}</Typography></td>
                <td><Typography variant="body">{data.id}</Typography></td>
                <td><Typography variant="body"><img src={ProfilePic} className="tableimg" alt="" /></Typography></td>

                {/* <td><Typography variant="body">{data.id}</Typography></td> */}
                <td><Typography variant="body">{data.fullName}</Typography></td>
                <td><Typography variant="body">{data.email}</Typography></td>
              </tr>
            ))}
            {
              data.length === 0
              && <tr style={{ borderCollapse: 'collapse' }}>
                {/* <td><Typography variant="body" ></Typography></td>

                <td><Typography variant="body" ></Typography></td>
                <td><Typography variant="body" ></Typography></td> */}
                {/* <td colspan="4"><Typography variant="body" >No data</Typography></td> */}
                <td style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }} colspan="6"><Typography variant="body" >No data</Typography></td>
              </tr>}



          </table>

        </div>

      </div>
      {openModel && <AddRider closeModel={setOpenModel} />}
    </div>
  )
}

export default Newrider