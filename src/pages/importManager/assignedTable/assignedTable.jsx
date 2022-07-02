import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import axios from '../../../axios';
import AddRider from '../../../components/Modal/AddRiderPopup';
import DeleteIcon from '@mui/icons-material/Delete';

import ProfilePic from '../../../assets/user.png'
import DeleteBtn from '../../../assets/delete.png'
import Layout from "../../../components/layout/Navbar";
import "./rider.css"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";

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


function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const Auth = localStorage.getItem("userInfor");
  const message = JSON.parse(Auth)
  const token = message.message.token
  const riderId = message.message.id
  // let histoty = usehistory()
  // console.log(message.message.id, "token")


  useEffect(() => {
    if (riderId) {
      axios.get('/riderdata/details/' + riderId)
        .then(res => {
          setData(res.data)
          // console.log("working", res.data)
          setLoading(true)
        })
        .catch(error => {
          console.log(error)
          setLoading(true)
        })
    }
  }, [])

  const deleteHandle = (e) => {
    let id = e.id
    console.log(id)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    // console.log(config, bodyParameters)

    // var headers = new Headers();
    // headers.append("Authorization", "Bearer " + token)
    // console.log(headers, "header")
    axios.delete(`/riderdata/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        // setData(res.data)
        window.location.href = "/assigned-data"
        console.log("working", res.data)
        // setLoading(true)
        // window.reload()

      })
      .catch(error => {
        console.log(error)
        setLoading(true)
      })
    console.log(e)
  }

  return (
    <Layout title="Rider" >


      <div className="rider-tble" >
        <div className="rider-head-details">
          <div className="rider-info" >Riders Information's</div>
          <button className="button-cus" onClick={() => {
            setOpenModel(true)

          }} >
            <Link style={{ textDecoration: "none" }} to='/assign-data' >
              assigning Data</Link>
          </button>
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
              <th><Typography variant="body">#</Typography> </th>
              <th ><Typography variant="body">Fullname</Typography> </th>
              <th>   <Typography variant="body">Category</Typography> </th>
              <th><Typography variant="body">Jobname</Typography> </th>
              <th><Typography variant="body">From</Typography> </th>
              <th><Typography variant="body">To</Typography> </th>
              <th><Typography variant="body">Action</Typography> </th>
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

            {data && data.length > 0 && data.map((data, i) => (
              <tr>
                <td><Typography variant="body">{i + 1}</Typography></td>
                <td><Typography variant="body">{data.fullName}</Typography></td>
                <td><Typography variant="body">{data.category}</Typography></td>

                <td><Typography variant="body">{data.jobName}</Typography></td>
                <td><Typography variant="body">{data.dataFrom}</Typography></td>
                <td><Typography variant="body">{data.dataTo}</Typography></td>
                <td onClick={() => deleteHandle(data)} >
                  {/* <img src={DeleteBtn} className="delete" alt="" /> */}
                  <DeleteIcon sx={{ color: "red", opacity: "0.8", ": &hover": { opacity: "1" } }} />
                </td>
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