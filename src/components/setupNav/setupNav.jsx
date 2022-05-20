import React from 'react'
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

import "./setupnav.css"


// import Down from '../../assets/down.png'

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





function setupNav() {


  return (
    <div className="setupnav">
      {/*       
        <Typography variant="body" className="principle">Principal</Typography>
        <Typography variant="body" className="company">Company</Typography>
        <Typography variant="body" className="Maintain" style={{color: "#5016BF"}} >Maintenance</Typography>
        <img src={Down} className="downbtn" alt="" />

          <div className="popup">
            <div className="items">
              <div className="sp"><Typography variant="body" >Security Policy</Typography><br />
              </div>
              <div className="dp"><Typography variant="body" >Data Policy</Typography>
              </div>
            </div>
          </div> */}
      <div className="navbar">
        <Link to='#' >
          <Typography variant="body" >Principal</Typography>
        </Link>
        <Link to='#' >
          <Typography variant="body" >Company</Typography>
        </Link>
        <div className="dropdown">
          <button className="dropbtn"><Typography variant="body" className="Maintain" style={{ color: "#5016BF" }} >Maintenance</Typography>
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/setup/securitypolicy" style={{ textDecoration: 'none' }}> <Typography variant="body" >Security Policy</Typography></Link>
            <Link to="/setup/datapolicy" style={{ textDecoration: 'none' }}><Typography variant="body" >Data Policy</Typography></Link>

          </div>
        </div>
      </div>

    </div>
  )
}

export default setupNav