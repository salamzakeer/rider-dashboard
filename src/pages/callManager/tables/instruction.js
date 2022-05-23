import React, { useState, useEffect } from "react";
import "./style.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import AddRider from "../../../components/Modal/AddRiderPopup";

import ProfilePic from "../../../assets/Mask Group 5.png";
import DeleteBtn from "../../../assets/delete.png";

const theme = createTheme();

theme.typography.h3 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "1.8rem",
  fontWeight: 400,
  fontStyle: "normal",

  "@media (max-width:850px)": {
    fontSize: "1.5rem",
  },
  "@media (max-width:400px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h1 = {
  typography: {
    fontFamily: ["Poppins"].join(","),
  },

  fontSize: "2.5rem",
  color: "#5016BF",
  "@media (max-width:800px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  // const [data, setData] = useState([]);

  const spans = {
    fontWeight: "600",
  };
  return (
    <div className="instruction">
      <p>
        Dear Owner1, <span style={{ fontWeight: "600" }}>Abu bin Bakar</span>
      </p>
      <p>
        I am calling from on behalf{" "}
        <span style={spans}> (DCA Name) (PIN SDN BHD )</span> with regards to
        your outstanding payment for{" "}
        <span style={spans}>(Principal) (IWK)</span>
        Before we proceed, I would like to do some verification ,
      </p>
      <p>
        Owner1: <span style={spans}>Abu bin Bakar</span>
      </p>
      <p>
        Address:
        <span style={spans}>
          Add1,Add2,Add3, Add4: ( C-01-05,DESAJAYA VILLA, JALAN DESA JAYA
          2,SEREMBAN)
        </span>
      </p>
      <p>
        Account Number : <span style={spans}> 101010101</span>
      </p>
      <p>
        You have the following ,
        <span style={spans}> (Arrears) (RM1000.00)</span> could you please make
        the payment as soon as possible.
      </p>
    </div>
  );
}

export default Newrider;
