import React, { useState } from 'react'

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import ChangePassword from '../../components/Modal/userprofile/changePassword';





import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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




function UserProfile() {

    const [openModel, setOpenModel] = useState(false);


  return (
    <div className="main">
      <div className="slider">
        <Sidebar />
      </div>
      <div className="container">
        <Navbar name="User Profile"/>
        <div className="tableHead2">
                  

                <ThemeProvider theme={theme}>
                <div className="headclass"><Typography variant="h3" className="subhead">Bangaly Andriana</Typography></div>
                </ThemeProvider>
                  <button className="btnaddnew" onClick={() => {
                      setOpenModel(true);console.log("hitt")}} >
                  <Typography variant="body" className="btntext">Change Password</Typography></button>
                  </div>
        

      </div>
      {openModel && <ChangePassword closeModel={setOpenModel} />}
      
    </div>
  )
}

export default UserProfile