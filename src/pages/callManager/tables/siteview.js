import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Sidebar from "../../../components/sidebar/sidebar";
import Navbar from "../../../components/navbar/navbar";
import AddRider from "../../../components/Modal/AddRiderPopup";

import ProfilePic from "../../../assets/Mask Group 5.png";
import DeleteBtn from "../../../assets/delete.png";

import "./style.module.css";

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
function createData(I, ID, Name, Email) {
  return { I, ID, Name, Email };
}

const rows = [
  createData("001", "RD001", "Banna Andrian", "Bannaandrian@gmail.com"),
  createData("001", "RD002", "Elver Andries", "Elverandries@gmail.com"),
  createData("001", "RD003", "Andria Elvera", "Andriaelvera@gmail.com"),
  createData("001", "RD004", "Bangaly Andriana", "Bangalyandriana@gmail.com"),
  createData("001", "RD005", "Andris Banta", "Andrisbanta@gmail.com"),
];
const data = [
  {
    date: "23/02/2020",
    officer: "Ang Lee",
    remark: "Client is not there",
  },
  {
    date: "10/02/2020",
    officer: "Chong Lee",
    remark: "Customer did not come out",
  },
  {
    date: "21/02/2020",
    officer: "David Lee",
    remark: "Deliverd the letter",
  },
];
function Newrider() {
  const [openModel, setOpenModel] = useState(false);
  // const [data, setData] = useState([]);

  return (
    <div className="rider-table table table-bordered border-primary">
      <table className="rider-table-head ">
        {data.map((row, i) => (
          <tr key={i}>
            <td>
              <p variant="body">Site Visit Date</p>
            </td>
            <td>
              <p variant="body">{row.date}</p>
            </td>
            <td>
              <p variant="body">Field Officer</p>
            </td>
            <td>
              <p variant="body">{row.officer}</p>
            </td>

            <td>
              <p variant="body">Remark:{row.remark}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Newrider;
